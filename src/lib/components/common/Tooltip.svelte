<script>
    import {onMount} from "svelte";
    import {
        onMountHoverable,
        onMountHoverableReverse,
        removeHoverableListeners
    } from "$lib/js/client/common/util.responsive.common.client.js";
    import {cubicInOut} from "svelte/easing";
    import {fly} from "svelte/transition";
    import {randomID} from "$lib/js/common/util.common.js";

    const {
        id = randomID(),
        children,
        left,
        content
    } = $props()

    let show = $state(false)

    onMount(() => {
        const wrapper = document.getElementById(`wrapper-tooltip_${id}`)

        onMountHoverable(
            id,
            () => {
                wrapper.addEventListener('mouseenter', onMouseEnter)
                wrapper.addEventListener('mouseleave', onMouseLeave)
            }
        )

        onMountHoverableReverse(
            id,
            () => {
                wrapper.removeEventListener('mouseenter', onMouseEnter)
                wrapper.removeEventListener('mouseleave', onMouseLeave)
            }
        )

        return () => {
            removeHoverableListeners(id)
        }
    })

    function onMouseEnter() {
        show = true
    }

    function onMouseLeave() {
        show = false
    }
</script>

<div id="wrapper-tooltip_{id}" class="wrapper-tooltip p-r">
    {@render children()}

    {#if show}
        <article class="tooltip l-h-1 p-a f-w-700"
                 class:tooltip-top={!left}
                 class:tooltip-left={left}
                 transition:fly={{
                        easing: cubicInOut,
                        duration: 400,
                        ...(() => {
                            if(left)
                                return {x: '.25rem'}

                            return {y: '.25rem'}
                        })()
                }}>

            {@html content}
        </article>
    {/if}
</div>

<style>
    .wrapper-tooltip {
        display: var(--display-wrapper-tooltip, block);
    }

    .tooltip {
        padding: 0.225rem .625rem 0.25rem;

        color: var(--color-text-tooltip);
        background-color: var(--color-background-tooltip);

        font-family: Poppins, sans-serif;
        font-size: var(--font-size-tooltip, .6rem);

        border-radius: .75rem;

        white-space: var(--white-space-tooltip, none);

        transition-property: color, background-color;
        transition-duration: .25s;
        transition-timing-function: ease-in-out;
    }

    .tooltip:after {
        content: '';

        position: absolute;

        border-width: 0.5rem;
        border-style: solid;

        transition: border 0.25s ease-in-out;
    }

    .tooltip-left {
        top: 50%;
        left: calc(100% + var(--left-tooltip, .75rem));
        transform: translateY(-50%);
    }

    .tooltip-left:after {
        top: 50%;
        right: calc(100% - .225rem);
        transform: translateY(-50%);

        border-color: transparent var(--color-background-tooltip, var(--color-background-tooltip-default)) transparent transparent;
    }
</style>
