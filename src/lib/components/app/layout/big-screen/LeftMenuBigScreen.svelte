<script>
    import {page} from "$app/stores";
    import Tooltip from "$lib/components/common/Tooltip.svelte";
    import {onLinkClick, onLinkClickOnNewTab} from "$lib/js/client/common/util.common.client.js";
    import {onMount} from "svelte";
    import {EVENT_ADD_LISTENER_BIG_SCREEN} from "$lib/js/client/common/event.common.client.js";

    onMount(() => {
            window.dispatchEvent(
                new CustomEvent(
                    EVENT_ADD_LISTENER_BIG_SCREEN,
                    {
                        detail: {
                            id: 'left-menu-big-screen',
                            f: () => {
                                document
                                    .querySelectorAll('.left-menu a.wrapper-item-page-left-menu')
                                    .forEach(a => a.addEventListener('click', onLinkClick))

                                document
                                    .querySelectorAll('.left-menu a.wrapper-contact-item')
                                    .forEach(a => a.addEventListener('click', onLinkClickOnNewTab))
                            }
                        }
                    }
                )
            )
        }
    )
</script>

<div class="for-big-screen wrapper-left-menu p-none b-box p-f t-0 z-index-3 grid h-100vh p-v-d o-y-scroll">
    <aside class="left-menu p-none-revert flex f-column j-c-s-b g-v-d">
        <div></div>

        <article class="wrapper-items-page-left-menu color-background-second b-r-d">
            <Tooltip content="Homepage"
                     left>

                <a href="/"
                   class="wrapper-item-page-left-menu"
                   aria-label="Homepage">

                    <svg class="icon-page-left-menu"
                         class:icon-page-left-menu-active={$page.url.pathname === '/'}
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0.1 0 575.85 512.1">

                        <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1v16.2c0 22.1-17.9 40-40 40h-16c-1.1 0-2.2 0-3.3-.1-1.4.1-2.8.1-4.2.1L416 512h-24c-22.1 0-40-17.9-40-40v-88c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v88c0 22.1-17.9 40-40 40h-55.9c-1.5 0-3-.1-4.5-.2-1.2.1-2.4.2-3.6.2h-16c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9.1-2.8v-69.7h-32c-18 0-32-14-32-32.1 0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7l255.4 224.5c8 7 12 15 11 24z"></path>
                    </svg>
                </a>
            </Tooltip>

            <Tooltip content="Technical Skills"
                     --white-space-tooltip="nowrap"
                     left>

                <a href="/technical-skills"
                   class="wrapper-item-page-left-menu"
                   aria-label="Technical Skills">

                    <svg class="icon-page-left-menu"
                         class:icon-page-left-menu-active={$page.url.pathname === '/technical-skills'}
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 -0.03 448 512.03">

                        <path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7.1 27.6 25.9 53.5 53.8 77.7 84 11-14.4 23.5-30.1 37-42.9 7.9-7.4 20.1-7.4 28 .1 34.6 33 63.9 76.6 84.5 118 20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512 98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21 42.1-29.4 53.4-88.2 28.1-134.4-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5-16.5-21-46-58.5-62.8-79.8-6.3-8-18.3-8.1-24.7-.1-33.8 42.5-50.8 69.3-50.8 99.4.1 68.5 50.7 109.1 113.8 109.1z"></path>
                    </svg>
                </a>
            </Tooltip>

            <Tooltip content="Portfolio"
                     left>

                <a href="/portfolio"
                   class="wrapper-item-page-left-menu b-box"
                   aria-label="Portfolio">

                    <svg class="icon-page-portfolio icon-page-left-menu b-box"
                         class:icon-page-left-menu-active={$page.url.pathname === '/portfolio'}
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="-0.06 0.02 512.03 512.04">

                        <path d="M156.6 384.9 125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2 3-8.9 7-20.5 11.8-33.8H24c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7.2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3H200c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8 13.4 72.9 9.3 194.8-111.4 276.7-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1.2S224 496.7 224 488V380.8c-14.1 4.9-26.4 8.9-35.7 11.9-11.2 3.6-23.4.5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path>
                    </svg>
                </a>
            </Tooltip>

            <Tooltip content="Blog"
                     left>

                <a href="/blog"
                   class="wrapper-item-page-left-menu"
                   aria-label="Blog">

                    <svg class="icon-page-blog icon-page-left-menu"
                         class:icon-page-left-menu-active={$page.url.pathname === '/blog'}
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512">

                        <path d="M192 32c0 17.7 14.3 32 32 32 123.7 0 224 100.3 224 224 0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32 70.7 0 128 57.3 128 128 0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192-17.7 0-32 14.3-32 32zm-96 16c0-26.5-21.5-48-48-48S0 117.5 0 144v224c0 79.5 64.5 144 144 144s144-64.5 144-144-64.5-144-144-144h-16v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48V144z"></path>
                    </svg>
                </a>
            </Tooltip>

            <Tooltip content="Contact"
                     left>

                <a href="/contact"
                   class="wrapper-item-page-left-menu"
                   aria-label="Contact">

                    <svg class="icon-page-contact icon-page-left-menu b-box"
                         class:icon-page-left-menu-active={$page.url.pathname === '/contact'}
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0.03 0 23.97 24.01">

                        <path d="M23 11a1 1 0 0 1-1-1 8.008 8.008 0 0 0-8-8 1 1 0 0 1 0-2 10.011 10.011 0 0 1 10 10 1 1 0 0 1-1 1Zm-3-1a6 6 0 0 0-6-6 1 1 0 1 0 0 2 4 4 0 0 1 4 4 1 1 0 0 0 2 0Zm2.183 12.164.91-1.049a3.1 3.1 0 0 0 0-4.377c-.031-.031-2.437-1.882-2.437-1.882a3.1 3.1 0 0 0-4.281.006l-1.906 1.606a12.784 12.784 0 0 1-6.932-6.944l1.6-1.9a3.1 3.1 0 0 0 .007-4.282S7.291.939 7.26.908A3.082 3.082 0 0 0 2.934.862l-1.15 1C-5.01 9.744 9.62 24.261 17.762 24a6.155 6.155 0 0 0 4.421-1.836Z"></path>
                    </svg>
                </a>
            </Tooltip>
        </article>

        <article class="wrapper-items-contact grid j-i-c g-1dot25">
            <a href="https://instagram.com/ersinware"
               class="wrapper-contact-item"
               aria-label="Instagram Profile of Ersin Karaer">

                <svg class="icon-contact-instagram icon-contact"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="7 7 50 50">

                    <path d="M21.58 7C13.541 7 7 13.545 7 21.586v20.832C7 50.458 13.545 57 21.586 57h20.832C50.458 57 57 50.455 57 42.414V21.58C57 13.541 50.455 7 42.414 7H21.58zM47 15a2 2 0 1 1-.001 4.001A2 2 0 0 1 47 15zm-15 4c7.17 0 13 5.83 13 13s-5.831 13-13 13c-7.17 0-13-5.831-13-13s5.83-13 13-13zm0 4a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9z"></path>
                </svg>
            </a>

            <a href="https://linkedin.com/in/ersinware"
               class="wrapper-item-contact"
               aria-label="LinkedIn Profile of Ersin Karaer">

                <svg class="icon-contact-linked-in icon-contact"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="4 4 42 42">

                    <path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM17 20v19h-6V20h6zm-6-5.53c0-1.4 1.2-2.47 3-2.47s2.93 1.07 3 2.47c0 1.4-1.12 2.53-3 2.53-1.8 0-3-1.13-3-2.53zM39 39h-6V29c0-2-1-4-3.5-4.04h-.08C27 24.96 26 27.02 26 29v10h-6V20h6v2.56S27.93 20 31.81 20c3.97 0 7.19 2.73 7.19 8.26V39z"></path>
                </svg>
            </a>

            <a href="https://github.com/ersinware"
               class="wrapper-contact-item"
               aria-label="GitHub Profile of Ersin Karaer">

                <svg class="icon-contact-github icon-contact"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="-266.98 288.95 264.45 225.05">

                    <path d="M-21.8 354.4c-.8-.9-1.3-2.3-1.2-3.5.9-20.1-1.8-39.6-8.6-58.6-.9-2.4-2-3.3-4.5-2.6-5.6 1.7-11.4 3-16.9 5-15.2 5.5-29.1 13.5-42.6 22.2-1.4.9-3.5 1.5-5.2 1.2-22.1-3.9-44.3-3.7-66.5-.3-2.2.3-5-.2-6.8-1.3-15.7-10.2-31.7-20.2-50-25-15.1-4-12-4.8-16.3 8.9-5.1 16.4-7.1 33.4-6 50.6.1 1.2-.8 2.7-1.6 3.8-6.6 7.9-11.7 16.6-14.8 26.4-6 19-4.8 38.2-1 57.3 7.5 37.5 32.8 63.8 70.2 70.3 19.3 3.4 39.2 3.7 57.3 5.2 20.2-1.5 38.9-1.6 57.1-4.5 31.8-5.1 55.8-22 67.8-52.7 4.2-10.7 6.5-22.4 7.9-33.8 3.2-25.1-1.1-48.7-18.3-68.6zm-17.7 104.4c-3.3 15.6-12.4 26.3-27.6 31.8-14.7 5.4-29.9 7.6-45.4 8.6-7.5.5-15 .1-22.5.1-20.2.4-40.4-.4-59.9-6.2-24.5-7.3-35.5-21.9-36.2-47.5-.3-9.1.7-17.9 5-26.1 8.5-16.5 23.2-22.3 40.6-22.6 9.5-.1 19.1.7 28.7 1.6 20.1 1.8 40-.1 60-1.2 8.8-.5 17.8-.7 26.4.8 18.5 3.2 32.5 21.6 32.8 42.3 0 6.1-.7 12.4-1.9 18.4z"></path>
                    <path d="M-191.5 424.5c-5.5 5.7-7.4 12.9-7.7 19.3 0 9.6 2.8 17.3 7.7 22.3 6.8 6.9 16.1 6.7 22.6-.3 9.8-10.6 9.7-30.5 0-41-6.5-7.1-16-7.2-22.6-.3zM-99.4 423.7c-11.2 10.3-11.2 33 0 43.2 6.5 5.9 15.3 5.6 21.4-.7 5.6-5.8 7.6-13.1 7.8-21-.2-7.9-2.2-15.1-7.9-20.9-6.1-6.3-14.9-6.5-21.3-.6z"></path>
                </svg>
            </a>
        </article>
    </aside>
</div>

<style>
    @media (min-width: 65.001em) {
        .icon-page-portfolio {
            padding-right: .05rem;
            margin-left: -.04rem;
        }

        .icon-page-blog {
            width: 1.3rem;
            max-width: 1.3rem;
            height: 1.3rem;

            margin-left: .125rem;
        }

        .icon-page-contact {
            padding: .0875rem;
            margin-bottom: -.1rem;
            margin-left: -.05rem;
        }

        .wrapper-items-contact {
            --left-tooltip: 1.25rem;
            --white-space-tooltip: nowrap;
        }

        .icon-contact {
            fill: rgba(70, 130, 180, 0.5);

            transition: fill .25s ease-in-out;
        }

        .icon-contact-instagram {
            width: 1.1rem;
            height: 1.1rem;
            margin-bottom: .15rem;
        }

        .icon-contact-linked-in {
            width: 1.025rem;
            height: 1.025rem;
        }

        .icon-contact-github {
            width: 1.15rem;
            height: 1.15rem;
        }

        @media (hover: hover) {
            .wrapper-contact-item:hover .icon-contact {
                fill: var(--color-link)
            }
        }
    }
</style>