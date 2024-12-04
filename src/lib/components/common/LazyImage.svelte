<script>
    import {onMount} from "svelte";
    import {
        EVENT_ADD_INTERSECTION_OBSERVER,
        EVENT_LOAD_LAZY_IMAGE,
        EVENT_REMOVE_INTERSECTION_OBSERVER
    } from "$lib/js/client/common/event.common.client.js";
    import {getRandomID} from "$lib/js/common/util.common.js";
    import {yieldToMain} from "$lib/js/client/common/util.common.client.js";
    import {
        getLinkForResponsiveImage,
        getMediaQueryForResponsiveImage
    } from "$lib/js/client/common/util.responsive.common.client.js";

    const {
        mediaData,
        id = getRandomID(),
        style,
        classes,
        src,
        alt,
        manual,
        onlyManual
    } = $props()

    let loaded = $state.raw()

    onMount(() => {
        if (manual || onlyManual) {
            window.addEventListener(`${EVENT_LOAD_LAZY_IMAGE}-${id}`, load)

            if (onlyManual)
                return
        }

        window.dispatchEvent(
            new CustomEvent(
                EVENT_ADD_INTERSECTION_OBSERVER,
                {
                    detail: {
                        node: document.getElementById(id),
                        onVisible: load
                    }
                }
            )
        )

        return () => {
            if (loaded)
                return

            removeListeners()
        }
    })

    async function load() {
        loaded = true

        await yieldToMain()

        removeListeners()
    }

    function removeListeners() {
        if (manual || onlyManual) {
            window.removeEventListener(`${EVENT_LOAD_LAZY_IMAGE}-${id}`, load)

            if (onlyManual)
                return
        }

        window.dispatchEvent(new CustomEvent(EVENT_REMOVE_INTERSECTION_OBSERVER, {detail: id}))
    }
</script>

{#if loaded}
    {#if mediaData}
        <picture class="d-contents">
            {#each mediaData as media}
                <source class="d-contents"
                        media={getMediaQueryForResponsiveImage(media)}
                        srcset={getLinkForResponsiveImage(src, media)}/>
            {/each}

            <img {id}
                 {style}
                 class={classes ?? ''}
                 src="/blank.svg"
                 {alt}/>
        </picture>
    {:else}
        <img {id}
             {style}
             class={classes ?? ''}
             {src}
             {alt}
        />
    {/if}
{:else}
    <img {id}
         {style}
         class={classes ?? ''}
         src="/blank.svg"
         {alt}/>
{/if}