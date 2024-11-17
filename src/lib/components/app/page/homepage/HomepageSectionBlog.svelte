<script>
    import '$lib/css/project/app/pages/homepage/project.section.homepage.technical.skills.app.css'

    import {onLinkClick} from "$lib/js/client/common/util.common.client.js";
</script>

<!-- TODO: complete implementation - lazy images, mobile version, connect to the cache -->
<section
        class="m-b-minus-last-section small-screen-p-b-page-for-bottom-bar
        b-box w-full p-t-page p-r-d color-background-second big-screen-p-b-page big-screen-p-l-for-left-menu small-screen-p-l-d">

    <div class="max-w-wrapper-section-texts m-h-auto">
        <div class="grid g-dot75">
            <a href="/blog"
               class="text-hint-3 w-max-content m-l-dot-1 text-link f-w-700"
               onclick={onLinkClick}>

                EXPLORE ALL
            </a>

            <h1 class="h-1 m-b-h-1">Blog & Articles</h1>
        </div>

        <p class="text-1 l-h-1-dot-5 t-a-j">
            Accusamus asperiores blanditiis doloremque, fugit laudantium magnam nam nihil, officia omnis quae
            quaerat quas quis sapiente sequi, sint sunt tempora ullam veniam.
        </p>
    </div>

    <article class="wrapper-articles flex j-c-c a-i-c small-screen-f-column">
        <div class="image-section w-100 for-big-screen">
            <img class="image-section w-100"
                 src="/blog.svg"
                 alt="Blog | Ersin Karaer, Software Engineer & Web Application Developer">
        </div>

        <div class="max-w-wrapper-section-texts p-r flex f-column g-v-d w-100">
            <article class="wrapper-image-flower p-a z-index-minus-1 for-big-screen">
                <img src="/flowers-blog.svg"
                     alt="Flowers | Ersin Karaer, Software Engineer & Web Application Developer">

                <article class="h-divider w-100 p-h-d"></article>
            </article>

            <article class="wrapper-base-article color-background b-r-d">
                <div class="wrapper-article grid color-background-third b-r-d">
                    <p class="title text-3 f-w-500">State Management in SvelteKit</p>

                    <p class="text text-4 color-text-second text-max-two-lines t-a-j">
                        Accusamus dicta dolor dolores fugit ipsa. Aliquam beatae consequatur eaque, enim fuga iusto
                        laborum molestias, nobis odio perspiciatis quas sit temporibus voluptatem?
                    </p>
                </div>
            </article>

            <article class="wrapper-base-article color-background b-r-d">
                <div class="wrapper-article grid color-background-third b-r-d">
                    <p class="title text-3 f-w-500">How to Optimize Web Applications</p>

                    <p class="text text-4 color-text-second text-max-two-lines t-a-j">
                        Architecto dicta ipsa labore magni, pariatur porro quibusdam sunt? Ab autem eos fugiat laborum
                        non rem rerum. Assumenda autem debitis iure voluptate?
                    </p>
                </div>
            </article>

            <article class="wrapper-base-article color-background b-r-d">
                <div class="wrapper-article grid color-background-third b-r-d">
                    <p class="title text-3 f-w-500">Responsive Images for Performant
                        Applications</p>

                    <p class="text text-4 color-text-second text-max-two-lines t-a-j">
                        Adipisci asperiores culpa distinctio dolores dolorum ducimus esse explicabo fuga in, laborum,
                        magni modi necessitatibus, officiis possimus sint totam veritatis voluptatum?
                    </p>
                </div>
            </article>
        </div>
    </article>
</section>

<style>
    .wrapper-article {
        gap: .675rem;

        padding: 1.75rem;
    }

    .title {
        letter-spacing: .005rem
    }

    .text {
        line-height: 1.125rem;
    }

    @media (min-width: 65.001em) {
        .wrapper-articles {
            margin-top: 5rem;
        }

        .image-section {
            aspect-ratio: 680/705.37;
        }

        .wrapper-image-flower {
            top: -13.925rem;

            width: 13.5rem;
            max-width: 13.5rem;

            right: 2rem;
        }

        .h-divider {
            width: 11.5rem;
            margin-left: -.625rem
        }

        .wrapper-base-article {
            width: 112.5%;

            opacity: .925;
        }

        .wrapper-base-article:nth-of-type(2) {
            margin-left: -72.5%;
        }

        .wrapper-base-article:nth-of-type(3) {
            margin-left: -42.5%
        }

        .wrapper-base-article:nth-of-type(4) {
            margin-left: -12.5%
        }
    }

    @media (max-width: 65em) {
        .wrapper-articles {
            margin-top: 3rem;
        }
    }
</style>