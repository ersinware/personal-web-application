<script>
    import '$lib/css/project/app/pages/homepage/project.section.homepage.portfolio.app.css'

    import {onLinkClick} from "$lib/js/client/common/util.common.client.js";
    import HomepageSectionPortfolioSlider
        from "$lib/components/app/page/homepage/portfolio/HomepageSectionPortfolioSlider.svelte";
    import {page} from "$app/stores";
</script>

<section class="flex f-column g-v-d">
    <div class="max-w-wrapper-section-texts m-h-auto">
        <div class="grid g-dot75">
            <a href="/portfolio"
               class="text-hint-3 text-link w-max-content m-l-dot-1 f-w-700"
               onclick={onLinkClick}>

                EXPLORE ALL
            </a>

            <h1 class="h-1 m-b-h-1">Portfolio & Projects</h1>
        </div>

        <p class="text-1 l-h-1-dot-5 t-a-j">
            Architecto, atque consequuntur deserunt dolores enim eos est laboriosam laudantium minus odio quaerat quam
            repellat sequi temporibus ullam, velit vitae voluptate iusto deserunt dolores.
        </p>
    </div>

    {#if $page.data.projects.length}
        <HomepageSectionPortfolioSlider/>
    {/if}
</section>