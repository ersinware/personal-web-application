<script>
    import {DURATION_PROGRESS_BAR_NAVIGATED} from "$lib/js/client/common/constant.transition.common.client.js";
    import {onMount} from "svelte";
    import {EVENT_NAVIGATED, EVENT_NAVIGATING} from "$lib/js/client/common/event.common.client.js";
    import {waitFor} from "$lib/js/common/util.common.js";

    const {id} = $props(),
        state = $state({})

    let navigatedTimeout

    onMount(() => {
        const postfix = id ? `-${id}` : ''

        window.addEventListener(`${EVENT_NAVIGATING}${postfix}`, onNavigating)
        window.addEventListener(`${EVENT_NAVIGATED}${postfix}`, onNavigated)

        return () => {
            window.addEventListener(`${EVENT_NAVIGATING}${postfix}`, onNavigating)
            window.addEventListener(`${EVENT_NAVIGATED}${postfix}`, onNavigated)
        }
    })

    async function onNavigating() {
        if (state.navigating || state.navigated) {
            clearTimeout(navigatedTimeout)

            state.navigating = false
            state.navigated = false

            await waitFor(50)
        }

        state.navigating = true
    }

    function onNavigated() {
        clearTimeout(navigatedTimeout)

        state.navigated = true
        state.navigating = false

        navigatedTimeout = setTimeout(
            () => {
                state.navigated = false
                state.navigating = false
            },
            DURATION_PROGRESS_BAR_NAVIGATED
        )
    }
</script>

<article class="wrapper p-f z-index-2 t-0"
         class:navigating={state.navigating}
         class:navigated={state.navigated}>
</article>

<style>
    .wrapper {
        left: 0;

        width: 0;
        height: 0.25rem;

        background-color: var(--color-progress-bar, var(--color-accent-darker));

        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    }

    .navigating {
        transition: width 10s;
        width: 75%;
    }

    .navigated {
        transition: width .75s;
        width: 100%;
    }
</style>
