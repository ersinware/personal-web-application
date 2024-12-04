<script>
    import {page} from "$app/stores";
    import {onMount} from "svelte";
    import {onLinkClickOnNewTab} from "$lib/js/client/common/util.common.client.js";
    import {goto} from "$app/navigation";
    import {EVENT_CLOSE_LAST_MODAL} from "$lib/js/client/common/event.common.client.js";
    import {waitFor} from "$lib/js/common/util.common.js";
    import {DURATION_TRANSITION_MODAL} from "$lib/js/client/common/constant.transition.common.client.js";
    import {performRippleEffectAndWait} from "$lib/js/client/common/util.ripple.common.client.js";

    onMount(() => {
        document
            .querySelectorAll('.wrapper-modal-menu a.wrapper-item-page')
            .forEach(a => a.addEventListener(
                    'click',
                    async event => {
                        event.preventDefault()

                        const href = event.currentTarget.href

                        await performRippleEffectAndWait(event)

                        window.dispatchEvent(new CustomEvent(EVENT_CLOSE_LAST_MODAL))

                        await waitFor(DURATION_TRANSITION_MODAL)

                        goto(href)
                    }
                )
            )

        document
            .querySelectorAll('.wrapper-modal-menu a.wrapper-contact-item')
            .forEach(a => a.addEventListener('click', onLinkClickOnNewTab))
    })
</script>

<article class="wrapper-modal-menu p-r z-index-2 grid g-1dot75">
    <p class="text-hint-3 color-text-unimportant f-w-700">OTHER PAGES</p>

    <a href="/"
       class="wrapper-item-page wrapper-item flex a-i-c g-1"
       aria-label="Homepage">

        <svg class="icon"
             class:icon-active="{$page.url.pathname === '/'}"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0.1 0 575.85 512.1">

            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1v16.2c0 22.1-17.9 40-40 40h-16c-1.1 0-2.2 0-3.3-.1-1.4.1-2.8.1-4.2.1L416 512h-24c-22.1 0-40-17.9-40-40v-88c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v88c0 22.1-17.9 40-40 40h-55.9c-1.5 0-3-.1-4.5-.2-1.2.1-2.4.2-3.6.2h-16c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9.1-2.8v-69.7h-32c-18 0-32-14-32-32.1 0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7l255.4 224.5c8 7 12 15 11 24z"></path>
        </svg>

        <p class="text text-2 color-text-second l-h-1 f-w-500">Homepage</p>
    </a>

    <a href="/technical-skills"
       class="wrapper-item-page wrapper-item flex a-i-c g-1"
       aria-label="Technical Skills">

        <svg class="icon"
             class:icon-active="{$page.url.pathname === '/technical-skills'}"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 -0.03 448 512.03">

            <path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7.1 27.6 25.9 53.5 53.8 77.7 84 11-14.4 23.5-30.1 37-42.9 7.9-7.4 20.1-7.4 28 .1 34.6 33 63.9 76.6 84.5 118 20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512 98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21 42.1-29.4 53.4-88.2 28.1-134.4-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5-16.5-21-46-58.5-62.8-79.8-6.3-8-18.3-8.1-24.7-.1-33.8 42.5-50.8 69.3-50.8 99.4.1 68.5 50.7 109.1 113.8 109.1z"></path>
        </svg>

        <p class="text text-2 color-text-second l-h-1 f-w-500">Technical Skills</p>
    </a>

    <div></div>

    <p class="text-hint-3 color-text-unimportant f-w-700">FOLLOW ME</p>

    <a href="https://instagram.com/ersinware"
       class="wrapper-contact-item wrapper-item flex a-i-c g-1"
       aria-label="Instagram Profile of Ersin Karaer">

        <svg class="icon-instagram icon b-box"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="7 7 50 50">

            <path d="M21.58 7C13.541 7 7 13.545 7 21.586v20.832C7 50.458 13.545 57 21.586 57h20.832C50.458 57 57 50.455 57 42.414V21.58C57 13.541 50.455 7 42.414 7H21.58zM47 15a2 2 0 1 1-.001 4.001A2 2 0 0 1 47 15zm-15 4c7.17 0 13 5.83 13 13s-5.831 13-13 13c-7.17 0-13-5.831-13-13s5.83-13 13-13zm0 4a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9z"></path>
        </svg>

        <p class="text text-2 text-link l-h-1 f-w-500">ersinware</p>
    </a>

    <a href="https://linkedin.com/in/ersinware"
       class="wrapper-contact-item wrapper-item flex a-i-c g-1"
       aria-label="LinkedIn Profile of Ersin Karaer">

        <svg class="icon-linked-in icon b-box"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="4 4 42 42">

            <path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM17 20v19h-6V20h6zm-6-5.53c0-1.4 1.2-2.47 3-2.47s2.93 1.07 3 2.47c0 1.4-1.12 2.53-3 2.53-1.8 0-3-1.13-3-2.53zM39 39h-6V29c0-2-1-4-3.5-4.04h-.08C27 24.96 26 27.02 26 29v10h-6V20h6v2.56S27.93 20 31.81 20c3.97 0 7.19 2.73 7.19 8.26V39z"></path>
        </svg>

        <p class="text text-2 text-link l-h-1 f-w-500">ersinware</p>
    </a>

    <a href="https://github.com/ersinware"
       class="wrapper-contact-item wrapper-item flex a-i-c g-1"
       aria-label="GitHub Profile of Ersin Karaer">

        <svg class="icon-github icon b-box"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="-266.98 288.95 264.45 225.05">

            <path d="M-21.8 354.4c-.8-.9-1.3-2.3-1.2-3.5.9-20.1-1.8-39.6-8.6-58.6-.9-2.4-2-3.3-4.5-2.6-5.6 1.7-11.4 3-16.9 5-15.2 5.5-29.1 13.5-42.6 22.2-1.4.9-3.5 1.5-5.2 1.2-22.1-3.9-44.3-3.7-66.5-.3-2.2.3-5-.2-6.8-1.3-15.7-10.2-31.7-20.2-50-25-15.1-4-12-4.8-16.3 8.9-5.1 16.4-7.1 33.4-6 50.6.1 1.2-.8 2.7-1.6 3.8-6.6 7.9-11.7 16.6-14.8 26.4-6 19-4.8 38.2-1 57.3 7.5 37.5 32.8 63.8 70.2 70.3 19.3 3.4 39.2 3.7 57.3 5.2 20.2-1.5 38.9-1.6 57.1-4.5 31.8-5.1 55.8-22 67.8-52.7 4.2-10.7 6.5-22.4 7.9-33.8 3.2-25.1-1.1-48.7-18.3-68.6zm-17.7 104.4c-3.3 15.6-12.4 26.3-27.6 31.8-14.7 5.4-29.9 7.6-45.4 8.6-7.5.5-15 .1-22.5.1-20.2.4-40.4-.4-59.9-6.2-24.5-7.3-35.5-21.9-36.2-47.5-.3-9.1.7-17.9 5-26.1 8.5-16.5 23.2-22.3 40.6-22.6 9.5-.1 19.1.7 28.7 1.6 20.1 1.8 40-.1 60-1.2 8.8-.5 17.8-.7 26.4.8 18.5 3.2 32.5 21.6 32.8 42.3 0 6.1-.7 12.4-1.9 18.4z"></path>
            <path d="M-191.5 424.5c-5.5 5.7-7.4 12.9-7.7 19.3 0 9.6 2.8 17.3 7.7 22.3 6.8 6.9 16.1 6.7 22.6-.3 9.8-10.6 9.7-30.5 0-41-6.5-7.1-16-7.2-22.6-.3zM-99.4 423.7c-11.2 10.3-11.2 33 0 43.2 6.5 5.9 15.3 5.6 21.4-.7 5.6-5.8 7.6-13.1 7.8-21-.2-7.9-2.2-15.1-7.9-20.9-6.1-6.3-14.9-6.5-21.3-.6z"></path>
        </svg>

        <p class="text-github text text-2 text-link l-h-1 f-w-500">ersinware</p>
    </a>
</article>

<img class="image-flower p-a"
     src="/images/flowers.svg"
     alt="Flowers | Ersin Karaer, Software Engineer & Web Application Developer"/>

<style>
    .wrapper-modal-menu {
        padding-top: 1rem;
        padding-bottom: .25rem;
    }

    .text-hint-3 {
        margin-left: .1rem;
        margin-bottom: .25rem;
    }

    .icon {
        width: 1.7rem;
        height: 1.7rem;

        fill: var(--color-link);
    }

    .icon-active {
        fill: var(--color-accent);
    }

    .text {
        height: .75rem;
    }

    .icon-instagram {
        padding: .075rem;
    }

    .icon-linked-in {
        padding: .1rem;
    }

    .icon-github {
        padding: .025rem;
        margin-left: -.05rem;
    }

    .text-github {
        margin-top: -.15rem;
    }

    .image-flower {
        right: var(--p-h);
        bottom: -.075rem;

        width: 15rem;

        aspect-ratio: 490/604.34;
    }

    @media (hover: hover) {
        .icon {
            transition: fill .25s ease-in-out;
        }

        .wrapper-item:hover .icon {
            fill: var(--color-link-darker);
        }

        .wrapper-item-page:hover .icon-active {
            fill: var(--color-accent-darker);
        }
    }
</style>