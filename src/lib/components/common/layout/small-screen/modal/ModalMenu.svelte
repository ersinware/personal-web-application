<script>
    import {page} from "$app/stores";
    import {onMount} from "svelte";
    import {onLinkClickOnNewTab, performRippleEffectAndWait} from "$lib/js/client/common/util.common.client.js";
    import {goto} from "$app/navigation";
    import {EVENT_CLOSE_LAST_MODAL} from "$lib/js/client/common/event.common.client.js";
    import {waitFor} from "$lib/js/common/util.common.js";
    import {DURATION_TRANSITION_MODAL} from "$lib/js/client/common/constant.transition.common.client.js";

    onMount(() => {
        document
            .querySelectorAll('#wrapper-other-pages-modal-menu-small-screen a')
            .forEach(a => a.addEventListener(
                    'click',
                    async event => {
                        const href = event.currentTarget.href

                        event.preventDefault()

                        await performRippleEffectAndWait(event)

                        window.dispatchEvent(new CustomEvent(EVENT_CLOSE_LAST_MODAL))

                        await waitFor(DURATION_TRANSITION_MODAL)

                        goto(href)
                    }
                )
            )

        document
            .querySelectorAll('#wrapper-follow-me-modal-menu-small-screen a')
            .forEach(a => a.addEventListener('click', onLinkClickOnNewTab))
    })
</script>

<article id="wrapper-modal-menu" class="big-screen-w-content-modal-small grid g-1dot75">
    <p class="text-hint-3 color-text-unimportant f-w-700">OTHER PAGES</p>

    <div id="wrapper-other-pages-modal-menu-small-screen" class="d-contents">
        <a href="/"
           class="wrapper-item-modal-menu-small-screen flex a-i-c g-1dot25"
           aria-label="Homepage">

            <svg class="icon-modal-menu-small-screen"
                 class:icon-modal-menu-small-screen-active={$page.url.pathname === '/'}
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 576 512">

                <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
            </svg>

            <p class="text-modal-menu-small-screen text-4 color-text-second l-h-1 f-w-500">Homepage</p>
        </a>

        <a href="/technical-skills"
           class="wrapper-item-modal-menu-small-screen flex a-i-c g-1dot25"
           aria-label="Technical Skills">

            <svg class="icon-modal-menu-small-screen"
                 class:icon-modal-menu-small-screen-active={$page.url.pathname === '/technical-skills'}
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 448 512">

                <path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/>
            </svg>

            <p class="text-modal-menu-small-screen text-4 color-text-second l-h-1 f-w-500">Technical Skills</p>
        </a>

        <a href="/personal-library"
           class="wrapper-item-modal-menu-small-screen flex a-i-c g-1dot25"
           aria-label="Personal Library">

            <svg id="icon-personal-library-modal-menu"
                 class="icon-modal-menu-small-screen b-box"
                 class:icon-modal-menu-small-screen-active={$page.url.pathname === '/personal-library'}
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512">

                <path d="M248 0l16 0c13.3 0 24 10.7 24 24l0 10.7C368.4 48.1 431.9 111.6 445.3 192l2.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 256c-17.7 0-32-14.3-32-32s14.3-32 32-32l2.7 0C80.1 111.6 143.6 48.1 224 34.7L224 24c0-13.3 10.7-24 24-24zM64 288l64 0 0 128 40 0 0-128 64 0 0 128 48 0 0-128 64 0 0 128 40 0 0-128 64 0 0 132.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512L32 512c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1L64 288z"/>
            </svg>

            <p class="text-modal-menu-small-screen text-4 color-text-second l-h-1 f-w-500">Personal Library</p>
        </a>
    </div>

    <div></div>

    <p class="text-hint-3 color-text-unimportant f-w-700">FOLLOW ME</p>

    <div id="wrapper-follow-me-modal-menu-small-screen" class="d-contents">
        <a href="https://instagram.com/ersinware"
           class="wrapper-item-modal-menu-small-screen flex a-i-c g-1dot25"
           aria-label="Homepage">

            <div class="icon-modal-menu-small-screen">
                <svg id="icon-instagram-modal-menu-small-screen"
                     class="icon-modal-menu-small-screen"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 64 64">

                    <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
                </svg>
            </div>

            <p class="text-modal-menu-small-screen text-4 color-text-second l-h-1 f-w-500">Instagram</p>
        </a>

        <a href="https://linkedin.com/in/ersinware"
           class="wrapper-item-modal-menu-small-screen flex a-i-c g-1dot25"
           aria-label="Technical Skills">

            <div class="icon-modal-menu-small-screen">
                <svg id="icon-linked-in-modal-menu-small-screen"
                     class="icon-modal-menu-small-screen"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 50 50">

                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
            </div>

            <p class="text-modal-menu-small-screen text-4 color-text-second l-h-1 f-w-500">LinkedIn</p>
        </a>

        <a href="https://github.com/ersinware"
           class="wrapper-item-modal-menu-small-screen flex a-i-c g-1dot25"
           aria-label="Personal Library">

            <svg class="icon-modal-menu-small-screen"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="-267 288.9 264.5 225.1">

                <path d="M-21.8,354.4c-0.8-0.9-1.3-2.3-1.2-3.5c0.9-20.1-1.8-39.6-8.6-58.6c-0.9-2.4-2-3.3-4.5-2.6c-5.6,1.7-11.4,3-16.9,5 c-15.2,5.5-29.1,13.5-42.6,22.2c-1.4,0.9-3.5,1.5-5.2,1.2c-22.1-3.9-44.3-3.7-66.5-0.3c-2.2,0.3-5-0.2-6.8-1.3 c-15.7-10.2-31.7-20.2-50-25c-15.1-4-12-4.8-16.3,8.9c-5.1,16.4-7.1,33.4-6,50.6c0.1,1.2-0.8,2.7-1.6,3.8 c-6.6,7.9-11.7,16.6-14.8,26.4c-6,19-4.8,38.2-1,57.3c7.5,37.5,32.8,63.8,70.2,70.3c19.3,3.4,39.2,3.7,57.3,5.2 c20.2-1.5,38.9-1.6,57.1-4.5c31.8-5.1,55.8-22,67.8-52.7c4.2-10.7,6.5-22.4,7.9-33.8C-0.3,397.9-4.6,374.3-21.8,354.4z M-39.5,458.8c-3.3,15.6-12.4,26.3-27.6,31.8c-14.7,5.4-29.9,7.6-45.4,8.6c-7.5,0.5-15,0.1-22.5,0.1c-20.2,0.4-40.4-0.4-59.9-6.2 c-24.5-7.3-35.5-21.9-36.2-47.5c-0.3-9.1,0.7-17.9,5-26.1c8.5-16.5,23.2-22.3,40.6-22.6c9.5-0.1,19.1,0.7,28.7,1.6 c20.1,1.8,40-0.1,60-1.2c8.8-0.5,17.8-0.7,26.4,0.8c18.5,3.2,32.5,21.6,32.8,42.3C-37.6,446.5-38.3,452.8-39.5,458.8z"></path>
                <path d="M-191.5,424.5c-5.5,5.7-7.4,12.9-7.7,19.3c0,9.6,2.8,17.3,7.7,22.3c6.8,6.9,16.1,6.7,22.6-0.3c9.8-10.6,9.7-30.5,0-41 C-175.4,417.7-184.9,417.6-191.5,424.5z"></path>
                <path d="M-99.4,423.7c-11.2,10.3-11.2,33,0,43.2c6.5,5.9,15.3,5.6,21.4-0.7c5.6-5.8,7.6-13.1,7.8-21c-0.2-7.9-2.2-15.1-7.9-20.9 C-84.2,418-93,417.8-99.4,423.7z"></path>
            </svg>

            <p class="text-modal-menu-small-screen text-4 color-text-second l-h-1 f-w-500">GitHub</p>
        </a>
    </div>
</article>

<style>
    #wrapper-modal-menu {
        padding-block: 1rem;
    }

    .text-hint-3 {
        margin-left: .1rem;
        margin-bottom: .25rem;
    }

    .icon-modal-menu-small-screen {
        width: 1.75rem;
        height: 1.75rem;

        fill: var(--color-link);
    }

    .icon-modal-menu-small-screen-active {
        fill: var(--color-accent);
    }

    .text-modal-menu-small-screen {
        height: .825rem;
    }

    #icon-personal-library-modal-menu {
        padding: .0325rem;
    }

    #icon-instagram-modal-menu-small-screen {
        width: 2.05rem;
        max-width: 2.05rem;
        height: 2.05rem;

        margin-left: -.15rem;
    }

    #icon-linked-in-modal-menu-small-screen {
        max-width: 1.85rem;
        width: 1.85rem;
        height: 1.85rem;

        margin-left: -.05rem;
    }

    @media (hover: hover) {
        .icon-modal-menu-small-screen {
            transition: fill .25s ease-in-out;
        }

        .wrapper-item-modal-menu-small-screen:hover .icon-modal-menu-small-screen {
            fill: var(--color-link-darker);
        }

        .wrapper-item-modal-menu-small-screen:hover .icon-modal-menu-small-screen-active {
            fill: var(--color-accent-darker);
        }
    }
</style>