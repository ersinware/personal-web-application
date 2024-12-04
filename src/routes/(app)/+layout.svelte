<script>
    import '$lib/css/project/app/project.padding.and.margin.css'
    import '$lib/css/project/app/project.width.and.height.app.css'

    import LeftMenuBigScreen from "$lib/components/app/layout/big-screen/LeftMenuBigScreen.svelte";
    import BottomBar from "$lib/components/app/layout/small-screen/BottomBar.svelte";
    import {fly} from "svelte/transition";
    import {TRANSITION_PAGE} from "$lib/js/client/common/constant.transition.common.client.js";

    const { children, data } = $props()
</script>

<LeftMenuBigScreen/>
<BottomBar/>

<!-- it is here because transition brakes its position -->
{#if data.pathname === '/'}
    <picture class="for-big-screen wrapper-image-flower p-a z-index-minus-1" in:fly={TRANSITION_PAGE}>
        <source class="d-contents" srcset="/images/cherry-blossom.svg" media="(min-width: 65.001em)">

        <img class="image-flower"
             src="/blank.svg"
             alt="Flower | Ersin Karaer, Software Engineer & Full Stack Developer">
    </picture>
{/if}

<main class="p-t-page p-r-d o-hidden big-screen-p-b-page big-screen-p-l-for-left-menu small-screen-p-b-page-for-bottom-bar small-screen-p-l-d">
    {#key data.pathname}
        <div class="max-w m-h-auto" in:fly={TRANSITION_PAGE}>
            {@render children()}
        </div>
    {/key}
</main>

<style>
    .wrapper-image-flower {
        top: 2.5rem;
        right: -.05rem;
    }

    .image-flower {
        width: 23.75rem;

        aspect-ratio: 400/326.46;
    }
</style>