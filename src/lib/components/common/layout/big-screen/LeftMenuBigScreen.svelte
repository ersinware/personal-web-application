<script>
    import {page} from "$app/stores";
    import Tooltip from "$lib/components/common/Tooltip.svelte";
    import {onLinkClick, onLinkClickOnNewTab} from "$lib/js/client/common/util.common.client.js";
</script>

<div id="wrapper-base-left-menu-big-screen" class="for-big-screen b-box p-f grid h-100vh o-y-scroll">
    <aside class="flex f-column j-c-s-b g-v-d">
        <div></div>

        <article class="wrapper-items-left-menu-big-screen color-background-second b-r-d">
            <Tooltip content="Homepage"
                     left>

                <a href="/"
                   class="wrapper-item-left-menu-big-screen d-block"
                   aria-label="Homepage"
                   onclick={onLinkClick}>

                    <svg class="icon-left-menu-big-screen"
                         class:icon-left-menu-big-screen-active={$page.url.pathname === '/'}
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 576 512">

                        <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                    </svg>
                </a>
            </Tooltip>

            <Tooltip content="Technical Skills"
                     --white-space-tooltip="nowrap"
                     left>

                <a href="/technical-skills"
                   class="wrapper-item-left-menu-big-screen d-block"
                   aria-label="Homepage"
                   onclick={onLinkClick}>

                    <svg id="icon-technical-skills-left-menu-big-screen"
                         class="icon-left-menu-big-screen"
                         class:icon-left-menu-big-screen-active={$page.url.pathname === '/technical-skills'}
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 448 512">

                        <path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/>
                    </svg>
                </a>
            </Tooltip>

            <Tooltip content="Portfolio"
                     left>

                <a href="/portfolio"
                   class="wrapper-item-left-menu-big-screen d-block"
                   aria-label="Portfolio"
                   onclick={onLinkClick}>

                    <svg id="icon-portfolio-left-menu-big-screen"
                         class="icon-left-menu-big-screen b-box"
                         class:icon-left-menu-big-screen-active={$page.url.pathname === '/portfolio'}
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512">

                        <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
                    </svg>
                </a>
            </Tooltip>

            <Tooltip content="Blog"
                     left>

                <a href="/blog"
                   class="wrapper-item-left-menu-big-screen d-block"
                   aria-label="Blog"
                   onclick={onLinkClick}>

                    <svg id="icon-blog-left-menu-big-screen"
                         class="icon-left-menu-big-screen"
                         class:icon-left-menu-big-screen-active={$page.url.pathname === '/blog'}
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512">

                        <path d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144L0 368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144l-16 0 0 96 16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48l0-224z"/>
                    </svg>
                </a>
            </Tooltip>

            <Tooltip content="Personal Library"
                     --white-space-tooltip="nowrap"
                     left>

                <a href="/personal-library"
                   class="wrapper-item-left-menu-big-screen d-block"
                   aria-label="Personal Library"
                   onclick={onLinkClick}>

                    <svg id="icon-personal-library-left-menu-big-screen"
                         class="icon-left-menu-big-screen b-box"
                         class:icon-left-menu-big-screen-active={$page.url.pathname === '/personal-library'}
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512">

                        <path d="M248 0l16 0c13.3 0 24 10.7 24 24l0 10.7C368.4 48.1 431.9 111.6 445.3 192l2.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 256c-17.7 0-32-14.3-32-32s14.3-32 32-32l2.7 0C80.1 111.6 143.6 48.1 224 34.7L224 24c0-13.3 10.7-24 24-24zM64 288l64 0 0 128 40 0 0-128 64 0 0 128 48 0 0-128 64 0 0 128 40 0 0-128 64 0 0 132.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512L32 512c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1L64 288z"/>
                    </svg>
                </a>
            </Tooltip>

            <Tooltip content="Contact"
                     left>

                <a href="/contact"
                   class="wrapper-item-left-menu-big-screen d-block"
                   aria-label="Contact"
                   onclick={onLinkClick}>

                    <svg id="icon-contact-left-menu-big-screen"
                         class="icon-left-menu-big-screen b-box"
                         class:icon-left-menu-big-screen-active={$page.url.pathname === '/contact'}
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24">

                        <path d="M23,11a1,1,0,0,1-1-1,8.008,8.008,0,0,0-8-8,1,1,0,0,1,0-2A10.011,10.011,0,0,1,24,10,1,1,0,0,1,23,11Zm-3-1a6,6,0,0,0-6-6,1,1,0,1,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0Zm2.183,12.164.91-1.049a3.1,3.1,0,0,0,0-4.377c-.031-.031-2.437-1.882-2.437-1.882a3.1,3.1,0,0,0-4.281.006l-1.906,1.606A12.784,12.784,0,0,1,7.537,9.524l1.6-1.9a3.1,3.1,0,0,0,.007-4.282S7.291.939,7.26.908A3.082,3.082,0,0,0,2.934.862l-1.15,1C-5.01,9.744,9.62,24.261,17.762,24A6.155,6.155,0,0,0,22.183,22.164Z"/>
                    </svg>
                </a>
            </Tooltip>
        </article>

        <article id="wrapper-contacts-left-menu-big-screen"
                 class="grid j-i-c g-1dot5">

            <Tooltip content="Instagram Profile"
                     left>

                <a href="https://instagram.com/ersinware"
                   class="wrapper-item-contact-left-menu-big-screen"
                   aria-label="Instagram Profile"
                   onclick={onLinkClickOnNewTab}>

                    <svg id="icon-instagram"
                         class="icon-contact-left-menu-big-screen"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 64 64">

                        <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
                    </svg>
                </a>
            </Tooltip>

            <Tooltip content="LinkedIn Profile"
                     left>

                <a href="https://linkedin.com/in/ersinware"
                   class="wrapper-item-contact-left-menu-big-screen"
                   aria-label="LinkedIn Profile"
                   onclick={onLinkClickOnNewTab}>

                    <svg id="icon-linkedin"
                         class="icon-contact-left-menu-big-screen"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 50 50">

                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                    </svg>
                </a>
            </Tooltip>

            <Tooltip content="GitHub Profile"
                     left>

                <a href="https://github.com/ersinware"
                   class="wrapper-item-contact-left-menu-big-screen"
                   aria-label="GitHub Profile"
                   onclick={onLinkClickOnNewTab}>

                    <svg id="icon-github"
                         class="icon-contact-left-menu-big-screen"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="-267 288.9 264.5 225.1">

                        <path d="M-21.8,354.4c-0.8-0.9-1.3-2.3-1.2-3.5c0.9-20.1-1.8-39.6-8.6-58.6c-0.9-2.4-2-3.3-4.5-2.6c-5.6,1.7-11.4,3-16.9,5 c-15.2,5.5-29.1,13.5-42.6,22.2c-1.4,0.9-3.5,1.5-5.2,1.2c-22.1-3.9-44.3-3.7-66.5-0.3c-2.2,0.3-5-0.2-6.8-1.3 c-15.7-10.2-31.7-20.2-50-25c-15.1-4-12-4.8-16.3,8.9c-5.1,16.4-7.1,33.4-6,50.6c0.1,1.2-0.8,2.7-1.6,3.8 c-6.6,7.9-11.7,16.6-14.8,26.4c-6,19-4.8,38.2-1,57.3c7.5,37.5,32.8,63.8,70.2,70.3c19.3,3.4,39.2,3.7,57.3,5.2 c20.2-1.5,38.9-1.6,57.1-4.5c31.8-5.1,55.8-22,67.8-52.7c4.2-10.7,6.5-22.4,7.9-33.8C-0.3,397.9-4.6,374.3-21.8,354.4z M-39.5,458.8c-3.3,15.6-12.4,26.3-27.6,31.8c-14.7,5.4-29.9,7.6-45.4,8.6c-7.5,0.5-15,0.1-22.5,0.1c-20.2,0.4-40.4-0.4-59.9-6.2 c-24.5-7.3-35.5-21.9-36.2-47.5c-0.3-9.1,0.7-17.9,5-26.1c8.5-16.5,23.2-22.3,40.6-22.6c9.5-0.1,19.1,0.7,28.7,1.6 c20.1,1.8,40-0.1,60-1.2c8.8-0.5,17.8-0.7,26.4,0.8c18.5,3.2,32.5,21.6,32.8,42.3C-37.6,446.5-38.3,452.8-39.5,458.8z"></path>
                        <path d="M-191.5,424.5c-5.5,5.7-7.4,12.9-7.7,19.3c0,9.6,2.8,17.3,7.7,22.3c6.8,6.9,16.1,6.7,22.6-0.3c9.8-10.6,9.7-30.5,0-41 C-175.4,417.7-184.9,417.6-191.5,424.5z"></path>
                        <path d="M-99.4,423.7c-11.2,10.3-11.2,33,0,43.2c6.5,5.9,15.3,5.6,21.4-0.7c5.6-5.8,7.6-13.1,7.8-21c-0.2-7.9-2.2-15.1-7.9-20.9 C-84.2,418-93,417.8-99.4,423.7z"></path>
                    </svg>
                </a>
            </Tooltip>
        </article>
    </aside>
</div>

<style>
    @media (min-width: 65.001em) {
        #icon-technical-skills-left-menu-big-screen {
            width: 1.375rem;
            height: 1.375rem
        }

        #icon-portfolio-left-menu-big-screen {
            padding-top: .03rem;
        }

        #icon-blog-left-menu-big-screen {
            padding: .05rem .05rem .025rem;
            margin-left: .1375rem;
        }

        #icon-personal-library-left-menu-big-screen {
            padding: .05rem
        }

        #icon-contact-left-menu-big-screen {
            padding: .1125rem;
            margin-bottom: -.1rem;
        }

        #wrapper-contacts-left-menu-big-screen {
            --left-tooltip: 1.25rem;
            --white-space-tooltip: nowrap;
        }

        .icon-contact-left-menu-big-screen {
            fill: rgba(70, 130, 180, 0.5);

            transition: fill .25s ease-in-out;
        }

        #icon-instagram {
            width: 1.5rem;
            height: 1.5rem;
        }

        #icon-linkedin {
            width: 1.3275rem;
            height: 1.3275rem;
        }

        #icon-github {
            width: 1.25rem;
            height: 1.25rem;
        }

        @media (hover: hover) {
            .wrapper-item-contact-left-menu-big-screen:hover .icon-contact-left-menu-big-screen {
                fill: var(--color-link)
            }
        }
    }
</style>