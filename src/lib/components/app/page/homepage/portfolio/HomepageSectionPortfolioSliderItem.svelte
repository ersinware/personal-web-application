<script>
    import {getDashedString} from "$lib/js/common/util.common.js";
    import LazyImage from "$lib/components/common/LazyImage.svelte";
    import {onLinkClick, onLinkClickOnNewTab} from "$lib/js/client/common/util.common.client.js";

    const { project } = $props(),
        dashedName = getDashedString(project.name)
</script>

<article class="wrapper b-box p-r-d big-screen-p-l-for-left-menu small-screen-p-l-d">
    <div class="wrapper-item-homepage-section-portfolio-slider">
        <div class="image-item-homepage-section-portfolio-slider p-r w-100 m-h-auto">
            <a href="/portfolio/{dashedName}"
               class="image-item-homepage-section-portfolio-slider wrapper-image-hoverable d-block w-100 o-hidden b-r-d"
               onclick={onLinkClick}>

                <LazyImage
                        id={dashedName}
                        classes="item-slider-image-section-homepage-portfolio image-hoverable w-h-100 b-r-d"
                        src={project.image}
                        alt="{project.name} | Ersin Karaer, Software Engineer & Web Application Developer"
                        onlyManual
                />
            </a>

            {#if project.link}
                <article class="wrapper-base-text-top p-none p-a color-background">
                    <div class="wrapper-text-top color-background-third">
                        <p class="text-top text-7 color-text-second t-a-j text-italic text-max-two-lines">
                            It's available on
                            <a href='https://{project.link}'
                               class="p-none-revert text-link f-w-500"
                               onclick={onLinkClickOnNewTab}>

                                {project.link}
                            </a>.
                        </p>
                    </div>
                </article>
            {/if}

            <article class="wrapper-base-text-bottom p-none p-a color-background b-r-d">
                <div class="wrapper-text-bottom grid color-background-third b-r-d">
                    <p class="text-4 l-h-1-dot-25 t-a-j text-max-three-lines">
                        {@html project.shortDescription}
                    </p>
                </div>
            </article>
        </div>
    </div>
</article>

<style>
    .wrapper {
        flex: 0 0 100%;
    }

    .wrapper-base-text-top,
    .wrapper-base-text-bottom {
        opacity: .9;
    }

    .wrapper-base-text-top {
        max-width: min(calc(100% - var(--p-h) * 4), 15.75rem);
    }

    .wrapper-base-text-top,
    .wrapper-text-top {
        border-radius: calc(var(--border-radius) - .25rem);
    }

    .wrapper-text-top {
        padding: .6rem .85rem;
    }

    .text-top {
        line-height: .8rem;
    }

    .wrapper-base-text-bottom {
        max-width: min(calc(100% - var(--p-h) * 4), var(--max-w-phone));
    }

    .wrapper-text-bottom {
        padding: 1.5rem;
    }

    @media (min-width: 65.001em) {
        .wrapper-base-text-top {
            top: 2rem;
            right: 3rem;
        }

        .wrapper-base-text-bottom {
            bottom: 3rem;
            right: 3rem;
        }
    }

    @media (max-width: 65em) {
        .wrapper-base-text-top {
            top: calc(var(--p-v) - .5rem);
            right: var(--p-h);
        }

        .wrapper-base-text-bottom {
            bottom: var(--p-v);
            right: var(--p-h);
        }
    }
</style>