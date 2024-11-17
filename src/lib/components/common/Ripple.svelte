<script>
    import {backOut} from "svelte/easing"
    import {scale} from "svelte/transition"
    import {onMount} from "svelte"
    import {EVENT_PERFORM_RIPPLE_EFFECT} from "$lib/js/client/common/event.common.client.js";
    import {DURATION_RIPPLE} from "$lib/js/client/common/constant.transition.common.client.js";
    import {waitFor} from "$lib/js/common/util.common.js";

    const rippleState = $state({})

    onMount(() => {
        window.addEventListener(EVENT_PERFORM_RIPPLE_EFFECT, performRippleEffect)
    })

    async function performRippleEffect(event) {
        const {clickX, clickY} = event.detail

        rippleState.style = `left: ${clickX}px;` + `top: ${clickY}px;`
        rippleState.perform = true

        await waitFor(DURATION_RIPPLE)

        rippleState.perform = false
    }
</script>

{#if rippleState.perform}
    <article style={rippleState.style}
             class="ripple p-none p-f z-index-5 b-r-c"
             in:scale={{
                duration: DURATION_RIPPLE,
                opacity: 1,
                easing: backOut,
            }}>
    </article>
{/if}

<style>
    .ripple {
        transform: translate(-50%, -50%);
        background-color: var(--color-ripple);

        width: 6.5rem;
        height: 6.5rem;
    }
</style>
