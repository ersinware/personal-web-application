<script>
    import '$lib/css/project/app/pages/homepage/project.section.homepage.portfolio.app.css'
    import NavigationSectionHomepagePortfolio
        from "$lib/components/app/page/homepage/portfolio/HomepageSectionPortfolioSliderNavigation.svelte";
    import Slider from "$lib/components/common/Slider.svelte";
    import {onMount} from "svelte";
    import {
        EVENT_ADD_INTERSECTION_OBSERVER,
        EVENT_LOAD_LAZY_IMAGE,
        EVENT_ON_MOUNT_BIG_SCREEN,
        EVENT_ON_MOUNT_SMALL_SCREEN,
        EVENT_REMOVE_BIG_SCREEN_LISTENER,
        EVENT_REMOVE_INTERSECTION_OBSERVER,
        EVENT_REMOVE_SMALL_SCREEN_LISTENER,
        EVENT_SLIDER_INDEX_CHANGED,
        EVENT_SLIDER_INSERT_ELEMENTS_FOR_INFINITY
    } from "$lib/js/client/common/event.common.client.js";
    import {page} from "$app/stores";
    import {getDashedString, waitFor} from "$lib/js/common/util.common.js";
    import HomepageSectionPortfolioSliderItem
        from "$lib/components/app/page/homepage/portfolio/HomepageSectionPortfolioSliderItem.svelte";

    const id = 'slider-section-homepage-portfolio',
        eventPostfix = '-' + id,
        setLoadedImages = new Set()

    let scrollDuration = 1250,
        insertElementsForInfinity = $state.raw()

    onMount(() => {
        addIntersectionObserver()

        if ($page.data.projects.length === 1)
            return

        adjustScrollDuration()
        addSliderListeners()

        return removeListeners
    })

    function addIntersectionObserver() {
        window.dispatchEvent(
            new CustomEvent(
                EVENT_ADD_INTERSECTION_OBSERVER,
                {
                    detail: {
                        node: document.getElementById(id),
                        onVisible: () => {
                            const dashedName = getDashedString($page.data.projects[0].name)

                            window.dispatchEvent(new CustomEvent(EVENT_LOAD_LAZY_IMAGE + "-" + dashedName))
                            setLoadedImages.add(dashedName)

                            onSliderIndexChange({ detail: 0 })

                            window.dispatchEvent(new CustomEvent(EVENT_REMOVE_INTERSECTION_OBSERVER, { detail: id }))
                        }
                    }
                }
            )
        )
    }

    function adjustScrollDuration() {
        window.dispatchEvent(
            new CustomEvent(EVENT_ON_MOUNT_BIG_SCREEN, { detail: { id, f: () => scrollDuration = 1250 } })
        )

        window.dispatchEvent(
            new CustomEvent(EVENT_ON_MOUNT_SMALL_SCREEN, { detail: { id, f: () => scrollDuration = 750 } })
        )
    }

    function addSliderListeners() {
        window.addEventListener(EVENT_SLIDER_INSERT_ELEMENTS_FOR_INFINITY + eventPostfix, onInsertElementsForInfinite)
        window.addEventListener(EVENT_SLIDER_INDEX_CHANGED + eventPostfix, onSliderIndexChange)
    }

    async function onSliderIndexChange(event) {
        const index = event.detail,
            nextIndex = (index + 1) % $page.data.projects.length,
            previousIndex = (index - 1 + $page.data.projects.length) % $page.data.projects.length,
            nextName = getDashedString($page.data.projects[nextIndex].name),
            previousName = getDashedString($page.data.projects[previousIndex].name)

        await waitFor(scrollDuration)

        if (!setLoadedImages.has(nextName)) {
            setLoadedImages.add(nextName)

            window.dispatchEvent(new CustomEvent(EVENT_LOAD_LAZY_IMAGE + "-" + nextName))
        }

        if (!setLoadedImages.has(previousName)) {
            setLoadedImages.add(previousName)

            window.dispatchEvent(new CustomEvent(EVENT_LOAD_LAZY_IMAGE + "-" + previousName))
        }

        if (setLoadedImages.size === $page.data.projects.length) {
            window.removeEventListener(EVENT_SLIDER_INDEX_CHANGED + eventPostfix, onSliderIndexChange)
            setLoadedImages.clear()
        }
    }

    function onInsertElementsForInfinite() {
        insertElementsForInfinity = true

        window.removeEventListener(EVENT_SLIDER_INSERT_ELEMENTS_FOR_INFINITY, onInsertElementsForInfinite)
    }

    function removeListeners() {
        window.dispatchEvent(new CustomEvent(EVENT_REMOVE_INTERSECTION_OBSERVER, { detail: id }))

        window.dispatchEvent(new CustomEvent(EVENT_REMOVE_BIG_SCREEN_LISTENER, { detail: id }))
        window.dispatchEvent(new CustomEvent(EVENT_REMOVE_SMALL_SCREEN_LISTENER, { detail: id }))

        window.removeEventListener(EVENT_SLIDER_INSERT_ELEMENTS_FOR_INFINITY + eventPostfix, onInsertElementsForInfinite)
        window.removeEventListener(EVENT_SLIDER_INDEX_CHANGED + eventPostfix, onSliderIndexChange)
    }
</script>

<div class="wrapper p-r">
    <Slider
            {id}
            bind:scrollDuration
            infinite>

        <article {id} class="b-box flex w-full o-hidden">
            {#if insertElementsForInfinity && $page.data.projects.length > 1}
                <HomepageSectionPortfolioSliderItem project={$page.data.projects[$page.data.projects.length - 1]}/>
            {/if}

            {#each $page.data.projects as project}
                <HomepageSectionPortfolioSliderItem {project}/>
            {/each}

            {#if insertElementsForInfinity && $page.data.projects.length > 1}
                <HomepageSectionPortfolioSliderItem project={$page.data.projects[0]}/>
            {/if}
        </article>
    </Slider>

    <NavigationSectionHomepagePortfolio
            {id}
            bind:scrollDuration/>
</div>

<style>
    .wrapper {
        margin-top: 5rem;
    }
</style>