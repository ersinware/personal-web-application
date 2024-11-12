<script>
    import {page} from "$app/stores";
    import {onLinkClick, performRippleEffectAndWait} from "$lib/js/client/common/util.common.client.js";
    import ModalMenu from "$lib/components/common/layout/small-screen/modal/ModalMenu.svelte";
    import {EVENT_ON_MOUNT_SMALL_SCREEN, EVENT_OPEN_MODAL} from "$lib/js/client/common/event.common.client.js";
    import {onMount} from "svelte";

    onMount(() => {
            window.dispatchEvent(
                new CustomEvent(
                    EVENT_ON_MOUNT_SMALL_SCREEN,
                    {
                        detail: {
                            id: 'bottom-bar',
                            f: () => {
                                document
                                    .querySelectorAll('#bottom-bar a')
                                    .forEach(a => a.addEventListener('click', onLinkClick))

                                document
                                    .getElementById('button-menu')
                                    .addEventListener('click', onMenuClick)
                            }
                        }
                    }
                )
            )
        }
    )

    async function onMenuClick(event) {
        await performRippleEffectAndWait(event)

        window.dispatchEvent(new CustomEvent(EVENT_OPEN_MODAL, {detail: {component: ModalMenu, bottomBarModal: true}}))
    }
</script>

<div class="for-small-screen p-f b-0 p-c-h w-100 max-w-phone color-background">
    <aside id="bottom-bar" class="flex a-i-c j-c-s-e color-background-second">
        <button id="button-menu" class="wrapper-icon-bottom-bar-small-screen grid j-i-c">
            <svg id="icon-menu-bottom-bar-small-screen"
                 class="icon-bottom-bar-small-screen b-box"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512">

                <path d="M85.333,0h64c47.128,0,85.333,38.205,85.333,85.333v64c0,47.128-38.205,85.333-85.333,85.333h-64   C38.205,234.667,0,196.462,0,149.333v-64C0,38.205,38.205,0,85.333,0z"/>
                <path d="M362.667,0h64C473.795,0,512,38.205,512,85.333v64c0,47.128-38.205,85.333-85.333,85.333h-64   c-47.128,0-85.333-38.205-85.333-85.333v-64C277.333,38.205,315.538,0,362.667,0z"/>
                <path d="M85.333,277.333h64c47.128,0,85.333,38.205,85.333,85.333v64c0,47.128-38.205,85.333-85.333,85.333h-64   C38.205,512,0,473.795,0,426.667v-64C0,315.538,38.205,277.333,85.333,277.333z"/>
                <path d="M362.667,277.333h64c47.128,0,85.333,38.205,85.333,85.333v64C512,473.795,473.795,512,426.667,512h-64   c-47.128,0-85.333-38.205-85.333-85.333v-64C277.333,315.538,315.538,277.333,362.667,277.333z"/>
            </svg>

            <span class="text-bottom-bar-small-screen text-4 l-h-1 color-text-second f-w-500">Menu</span>
        </button>

        <a href="/portfolio"
           class="wrapper-icon-bottom-bar-small-screen grid j-i-c">

            <svg id="icon-portfolio-bottom-bar-small-screen"
                 class="icon-bottom-bar-small-screen b-box"
                 class:icon-bottom-bar-small-screen-active={$page.url.pathname === '/portfolio'}
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512">

                <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
            </svg>

            <p class="text-bottom-bar-small-screen text-4 l-h-1 color-text-second f-w-500">Portfolio</p>
        </a>

        <a href="/blog"
           class="wrapper-icon-bottom-bar-small-screen grid j-i-c">

            <svg id="icon-blog-bottom-bar-small-screen"
                 class="icon-bottom-bar-small-screen"
                 class:icon-bottom-bar-small-screen-active={$page.url.pathname === '/blog'}
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512">

                <path d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144L0 368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144l-16 0 0 96 16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48l0-224z"/>
            </svg>

            <p class="text-bottom-bar-small-screen text-4 l-h-1 color-text-second f-w-500">Blog</p>
        </a>

        <a href="/contact"
           class="wrapper-icon-bottom-bar-small-screen grid j-i-c">

            <svg id="icon-contact-bottom-bar-small-screen"
                 class="icon-bottom-bar-small-screen b-box"
                 class:icon-bottom-bar-small-screen-active={$page.url.pathname === '/contact'}
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24">

                <path d="M23,11a1,1,0,0,1-1-1,8.008,8.008,0,0,0-8-8,1,1,0,0,1,0-2A10.011,10.011,0,0,1,24,10,1,1,0,0,1,23,11Zm-3-1a6,6,0,0,0-6-6,1,1,0,1,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0Zm2.183,12.164.91-1.049a3.1,3.1,0,0,0,0-4.377c-.031-.031-2.437-1.882-2.437-1.882a3.1,3.1,0,0,0-4.281.006l-1.906,1.606A12.784,12.784,0,0,1,7.537,9.524l1.6-1.9a3.1,3.1,0,0,0,.007-4.282S7.291.939,7.26.908A3.082,3.082,0,0,0,2.934.862l-1.15,1C-5.01,9.744,9.62,24.261,17.762,24A6.155,6.155,0,0,0,22.183,22.164Z"/>
            </svg>

            <p class="text-bottom-bar-small-screen text-4 l-h-1 color-text-second f-w-500">Contact</p>
        </a>
    </aside>
</div>

<style>
    @media (max-width: 65em) {
        aside {
            height: var(--height-bottom-bar);
        }

        .wrapper-icon-bottom-bar-small-screen {
            gap: .65rem;
        }

        .icon-bottom-bar-small-screen {
            height: 1.75rem;

            fill: var(--color-link);

            transition: fill .25s ease-in-out;
        }

        .icon-bottom-bar-small-screen-active {
            fill: var(--color-accent);
        }

        .text-bottom-bar-small-screen {
            letter-spacing: .0125rem;
        }

        #icon-menu-bottom-bar-small-screen {
            padding-top: .065rem;
        }

        #icon-portfolio-bottom-bar-small-screen {
            padding-top: .0375rem;
        }

        #icon-blog-bottom-bar-small-screen {
            height: 1.85rem;

            margin-top: -.1rem;
            margin-left: .7rem;
        }

        #icon-contact-bottom-bar-small-screen {
            padding-block: .1rem;
        }

        @media (min-width: 26.95em) {
            aside {
                border-top-left-radius: var(--border-radius);
                border-top-right-radius: var(--border-radius);
            }
        }

        @media (hover: hover) {
            .wrapper-icon-bottom-bar-small-screen:hover .icon-bottom-bar-small-screen {
                fill: var(--color-link-darker);
            }

            .wrapper-icon-bottom-bar-small-screen:hover .icon-bottom-bar-small-screen-active {
                fill: var(--color-accent-darker);
            }
        }
    }
</style>