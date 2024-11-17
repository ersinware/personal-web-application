<script>
    import {onLinkClick} from "$lib/js/client/common/util.common.client.js";
    import SliderSectionHomepagePortfolio
        from "$lib/components/app/page/homepage/portfolio/HomepageSectionPortfolioSlider.svelte";
    import {page} from "$app/stores";
</script>

<section>
    <div class="max-w-wrapper-section-texts m-h-auto">
        <div class="grid g-dot75">
            <a href="/portfolio"
               class="text-hint-3 w-max-content m-l-dot-1 text-link f-w-700"
               onclick={onLinkClick}>

                EXPLORE ALL
            </a>

            <h1 class="h-1 m-b-h-1">Portfolio & Projects</h1>
        </div>

        <p class="text-1 l-h-1-dot-5 t-a-j">
            Accusamus asperiores blanditiis doloremque, fugit laudantium magnam nam nihil, officia omnis quae
            quaerat quas quis sapiente sequi, sint sunt tempora ullam veniam.
        </p>
    </div>

    {#if $page.data.projects.length}
        <SliderSectionHomepagePortfolio/>
    {/if}
</section>