<script>
    import {performRippleEffectAndWait} from "$lib/js/client/common/util.ripple.common.client.js";
    import {
        EVENT_ON_MOUNT_BIG_SCREEN,
        EVENT_ON_MOUNT_SMALL_SCREEN,
        EVENT_REMOVE_BIG_SCREEN_LISTENER,
        EVENT_REMOVE_SMALL_SCREEN_LISTENER,
        EVENT_SLIDER_INDEX_CHANGED,
        EVENT_SLIDER_NAVIGATION_TO_NEXT,
        EVENT_SLIDER_NAVIGATION_TO_PREV
    } from "$lib/js/client/common/event.common.client.js";
    import {waitFor} from "$lib/js/common/util.common.js";
    import {onMount} from "svelte";
    import {cubicInOut} from "svelte/easing";
    import {fly} from "svelte/transition";
    import {page} from "$app/stores";

    const {
            id,
            scrollDuration = $bindable(1250)
        } = $props(),
        eventPostfix = '-' + id

    let working,
        index = $state.raw(0),
        TRANSITION_TEXT_CURRENT_INDEX = $state.raw()

    onMount(() => {
        if ([0, 1].includes($page.data.projects.length))
            return

        window.addEventListener(EVENT_SLIDER_INDEX_CHANGED + eventPostfix, onIndexChange)
        adjustTransition()

        return () => {
            window.removeEventListener(EVENT_SLIDER_INDEX_CHANGED + eventPostfix, onIndexChange)
            window.dispatchEvent(new CustomEvent(EVENT_REMOVE_BIG_SCREEN_LISTENER, { detail: id }))
            window.dispatchEvent(new CustomEvent(EVENT_REMOVE_SMALL_SCREEN_LISTENER, { detail: id }))
        }
    })

    function adjustTransition() {
        window.dispatchEvent(
            new CustomEvent(
                EVENT_ON_MOUNT_SMALL_SCREEN,
                {
                    detail: {
                        id,
                        f: () => TRANSITION_TEXT_CURRENT_INDEX = {
                            x: '.5rem',
                            duration: scrollDuration / 2,
                            easing: cubicInOut
                        }
                    }
                }
            )
        )

        window.dispatchEvent(
            new CustomEvent(
                EVENT_ON_MOUNT_BIG_SCREEN,
                {
                    detail: {
                        id,
                        f: () => TRANSITION_TEXT_CURRENT_INDEX = { opacity: 1, duration: 0 }
                    }
                }
            )
        )
    }

    async function onIndexChange(event) {
        await waitFor(scrollDuration / 2)
        index = event.detail
    }

    async function onNextClick(event) {
        if (working)
            return

        working = true

        await performRippleEffectAndWait(event)
        window.dispatchEvent(new CustomEvent(EVENT_SLIDER_NAVIGATION_TO_NEXT + eventPostfix))

        await waitFor(scrollDuration)
        working = false
    }

    async function onPrevClick(event) {
        if (working)
            return

        working = true

        await performRippleEffectAndWait(event)
        window.dispatchEvent(new CustomEvent(EVENT_SLIDER_NAVIGATION_TO_PREV + eventPostfix))

        await waitFor(scrollDuration)
        working = false
    }

    function getCurrentIndexText(index) {
        switch (index) {
            case 0:
                return 'ONE'
            case 1:
                return 'TWO'
            case 2:
                return 'THREE'
            case 3:
                return 'FOUR'
            case 4:
                return 'FIVE'
            case 5:
                return 'SIX'
        }
    }
</script>

<div class="b-box p-none p-a t-0 w-full p-r-d big-screen-p-l-for-left-menu small-screen-p-l-d">
    <div class="wrapper-item-homepage-section-portfolio-slider">
        <div class="image-item-homepage-section-portfolio-slider p-r w-100 m-h-auto">
            <article class="wrapper-left p-a grid">
                {#key index}
                    <p class="text-hint-3 m-l-dot-025 color-text-third f-w-700"
                       in:fly={TRANSITION_TEXT_CURRENT_INDEX}>

                        {getCurrentIndexText(index)}
                    </p>
                {/key}

                <div class="h-divider w-100"></div>

                <p class="text-hint-3 m-l-dot-025 color-text-unimportant f-w-700">{getCurrentIndexText($page.data.projects.length - 1)}</p>
            </article>

            <div class="for-big-screen h-divider p-a p-c-v w-100"></div>

            <article class="wrapper-right p-a grid j-i-r">
                <button class="button-navigation p-none-revert text-hint-3 color-text-accent f-w-700"
                        onclick={onNextClick}>

                    NEXT
                </button>

                <div class="h-divider w-100"></div>

                <button class="button-navigation p-none-revert text-hint-3 color-text-accent f-w-700"
                        onclick={onPrevClick}>

                    PREV
                </button>
            </article>
        </div>
    </div>
</div>

<div class="for-small-screen holder"></div>

<style>
    .wrapper-left,
    .wrapper-right {
        width: var(--width-navigation-homepage-section-portfolio-slider);
    }

    @media (min-width: 65.001em) {
        .wrapper-left,
        .wrapper-right {
            top: 50%;

            gap: 1rem;
        }

        .wrapper-left {
            left: 0;
            transform: translate(-100%, -50%);
        }

        .wrapper-right {
            right: 0;
            transform: translate(100%, -50%);
        }
    }

    @media (max-width: 65em) {
        .holder {
            height: 4.75rem;
        }

        .wrapper-left,
        .wrapper-right {
            bottom: -4.5rem;

            gap: .675rem;
        }

        .wrapper-left {
            left: .5rem;
        }

        .wrapper-right {
            right: .5rem;
        }
    }

    @media (hover: hover) {
        button {
            transition: color .25s ease-in-out;
        }

        button:hover {
            color: var(--color-accent-darker) !important;
        }
    }
</style>