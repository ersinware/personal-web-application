<script>
    import '$lib/css/project/app/project.padding.and.margin.css'
    import '$lib/css/project/app/project.width.and.height.app.css'

    import LeftMenuBigScreen from "$lib/components/common/layout/big-screen/LeftMenuBigScreen.svelte";
    import BottomBar from "$lib/components/common/layout/small-screen/BottomBar.svelte";
    import {fly} from "svelte/transition";
    import {cubicInOut} from "svelte/easing";

    const {children, data} = $props()
</script>

<LeftMenuBigScreen/>
<BottomBar/>

<main class="p-t-page p-r-d o-hidden big-screen-p-b-page big-screen-p-l-for-left-menu small-screen-p-b-page-for-bottom-bar small-screen-p-l-d">
    {#key data.pathname}
        <div class="max-w m-h-auto" in:fly={{y: '1rem', duration: 600, easing: cubicInOut}}>
            {@render children()}
        </div>
    {/key}
</main>