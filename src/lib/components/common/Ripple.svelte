<script>
    import {backOut, circInOut} from "svelte/easing"
    import {scale} from "svelte/transition"
    import {onMount} from "svelte"
    import {
        EVENT_PERFORM_RIPPLE_EFFECT,
        EVENT_PERFORM_RIPPLE_EFFECT_FOR_FRAMED_BUTTON
    } from "$lib/js/client/common/event.common.client.js";
    import {
        DURATION_RIPPLE,
        DURATION_RIPPLE_FOR_FRAMED_BUTTON
    } from "$lib/js/client/common/constant.transition.common.client.js";
    import {waitFor} from "$lib/js/common/util.common.js";

    const state = $state({})

    onMount(() => {
        window.addEventListener(EVENT_PERFORM_RIPPLE_EFFECT, performRippleEffect)
        window.addEventListener(EVENT_PERFORM_RIPPLE_EFFECT_FOR_FRAMED_BUTTON, performRippleEffectForFramedButton)
    })

    async function performRippleEffect(event) {
        const { clickX, clickY } = event.detail

        state.style = `left: ${clickX}px;` + `top: ${clickY}px;`
        state.perform = true

        await waitFor(DURATION_RIPPLE)

        state.perform = false
    }

    async function performRippleEffectForFramedButton(event) {
        const { x, y, width, height, borderRadius, clickX, clickY } = event.detail

        state.styleWrapper =
            `left: ${x}px;` +
            `top: ${y}px;` +
            `width: ${width}px;` +
            `height: ${height}px;` +
            `border-radius: ${borderRadius}`

        const side = width > height ? width : height

        state.style =
            `left: ${clickX - x}px;` +
            `top: ${clickY - y}px;` +
            `width: ${side * 2}px;` +
            `height: ${side * 2}px;`

        state.performForFramedButton = true

        await waitFor(DURATION_RIPPLE_FOR_FRAMED_BUTTON)

        state.performForFramedButton = false
    }
</script>

{#if state.perform}
    <article style={state.style}
             class="ripple p-none p-f z-index-5 b-r-c"
             in:scale={{
                duration: DURATION_RIPPLE,
                opacity: 1,
                easing: backOut,
            }}>
    </article>
{/if}

{#if state.performForFramedButton}
    <div style={state.styleWrapper} class="p-none p-f o-hidden">
        <article style={state.style}
                 class="ripple-for-framed-button p-a z-index-5 b-r-c"
                 in:scale={{
                    duration: DURATION_RIPPLE_FOR_FRAMED_BUTTON,
                    opacity: 1,
                    easing: circInOut,
                }}>
        </article>
    </div>
{/if}

<style>
    .ripple,
    .ripple-for-framed-button {
        transform: translate(-50%, -50%);
    }

    .ripple {
        width: 6.5rem;
        height: 6.5rem;

        background-color: var(--color-ripple);
    }

    .ripple-for-framed-button {
        background-color: var(--color-ripple-framed-button);
    }
</style>
