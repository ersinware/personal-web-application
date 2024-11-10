<script>
    import LeftMenuBigScreen from "$lib/components/common/layout/big-screen/LeftMenuBigScreen.svelte";
    import {page} from "$app/stores";
    import {fly} from "svelte/transition";
    import {cubicInOut} from "svelte/easing";

    const {children} = $props()
</script>

<LeftMenuBigScreen/>

<main class="max-w p-v-d-page m-h-auto">
    {#key $page.url.pathname}
        <div in:fly={{y: '1rem', duration: 600, easing: cubicInOut}}>
            {@render children()}
        </div>
    {/key}
</main>

<style>
    main {
        padding-right: var(--p-h);
    }

    @media (min-width: 65.001em) {
        main {
            padding-left: calc(var(--left-wrapper-base-left-menu-big-screen) + var(--width-left-menu-big-screen) + var(--p-h));
        }
    }

    @media (max-width: 65em) {
        main {
            padding-left: var(--p-h);
        }
    }
</style>
