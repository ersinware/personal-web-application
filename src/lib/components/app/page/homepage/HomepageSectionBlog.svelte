<script>
    import '$lib/css/project/app/pages/homepage/project.section.homepage.blog.app.css'

    import {onLinkClick} from "$lib/js/client/common/util.common.client.js";
    import LazyImage from "$lib/components/common/LazyImage.svelte";
    import {page} from "$app/stores";
    import {getDashedString} from "$lib/js/common/util.common.js";
</script>

<section
        class="b-box flex f-column a-i-c g-v-d w-full p-v-d-page p-r-d color-background-second big-screen-p-l-for-left-menu small-screen-p-l-d">

    <div class="wrapper-image-homepage-section-blog wrapper-image-section w-100 for-small-screen">
        <LazyImage
                classes="image-homepage-section-blog image-section w-100"
                src="/images/homepage/blog-small-screen.svg"
                alt="Blog | Ersin Karaer, Software Engineer & Web Application Developer"/>
    </div>

    <div class="max-w-wrapper-section-texts">
        <div class="grid g-dot75">
            <a href="/blog"
               class="text-hint-3 w-max-content m-l-dot-1 text-link f-w-700"
               onclick={onLinkClick}>

                EXPLORE ALL
            </a>

            <h1 class="h-1 m-b-h-1">Blog & Articles</h1>
        </div>

        <p class="text-1 l-h-1-dot-5 t-a-j">
            Architecto, atque consequuntur deserunt dolores enim eos est laboriosam laudantium minus odio quaerat quam
            repellat sequi temporibus ullam, velit vitae voluptate iusto deserunt dolores.
        </p>
    </div>

    <article class="wrapper-articles flex j-c-c a-i-c g-v-d w-100 big-screen-m-t-d small-screen-f-column">
        <div class="wrapper-image-homepage-section-blog wrapper-image-section w-100 for-big-screen">
            <LazyImage
                    classes="image-homepage-section-blog image-section w-100"
                    src="/images/homepage/blog-big-screen.svg"
                    alt="Blog | Ersin Karaer, Software Engineer & Web Application Developer"/>
        </div>

        <div class="max-w-small-wrapper-section-texts p-r flex f-column g-v-d w-100">
            <article class="wrapper-image-flower-homepage-section-blog p-a z-index-minus-1 for-big-screen">
                <LazyImage
                        classes="image-flower-homepage-section-blog"
                        src="/images/flowers.svg"
                        alt="Flowers | Ersin Karaer, Software Engineer & Web Application Developer"/>

                <article class="h-divider w-100 p-h-d"></article>
            </article>

            {#each $page.data.articles as article}
                <article class="wrapper-base-article color-background b-r-d">
                    <a href="/blog/{getDashedString(article.title)}"
                       class="wrapper-article wrapper-texts-summary grid color-background-third b-r-d"
                       onclick={onLinkClick}>

                        <p class="title-text-summary l-h-1-dot-25 f-w-500 big-screen-text-2 small-screen-text-1">{article.title}</p>

                        <p class="title-text-summary color-text-second text-max-two-lines t-a-j big-screen-text-4 small-screen-text-2">
                            {article.shortDescription}
                        </p>
                    </a>
                </article>
            {/each}
        </div>
    </article>
</section>

<style>
    @media (min-width: 65.001em) {
        .h-divider {
            width: 11.5rem;

            margin-top: -.075rem;
            margin-left: -.625rem
        }

        .wrapper-base-article {
            width: 118%;

            opacity: .925;
        }

        .wrapper-base-article:nth-of-type(2) {
            margin-left: -78%;
        }

        .wrapper-base-article:nth-of-type(3) {
            margin-left: -48%
        }

        .wrapper-base-article:nth-of-type(4) {
            margin-left: -18%
        }
    }

    @media (max-width: 65em) {
        .wrapper-articles {
            margin-top: calc(var(--p-v) / 3);
        }
    }

    @media (hover: hover) {
        .wrapper-article {
            transition: background-color .25s ease-in-out;
        }

        .wrapper-article:hover {
            background-color: var(--color-background-fourth);
        }
    }
</style>