<script>
    import {performRippleEffectForFramedButtonAndWait} from "$lib/js/client/common/util.ripple.common.client.js";

    async function onClick(event) {
        await performRippleEffectForFramedButtonAndWait(event)

        document
            .getElementById('wrapper-homepage-section-technical-skills')
            .scrollIntoView({ behavior: 'smooth' })
    }
</script>

<svelte:head>
    <link rel="preload"
          href="/images/homepage/software-engineer.svg"
          as="image"
          type="image/svg+xml"
          fetchpriority="high"
    />
</svelte:head>

<section class="p-r flex j-c-c a-i-c g-v-d small-screen-f-column">
    <div class="wrapper-image-section w-100">
        <img class="image-section w-100"
             src="/images/homepage/software-engineer.svg"
             alt="Software Engineer | Ersin Karaer, Software Engineer & Web Application Developer">
    </div>

    <div class="max-w-small-wrapper-section-texts">
        <div class="grid g-dot75">
            <p class="text-hint-3 m-l-dot-1 color-text-unimportant f-w-700">SOFTWARE ENGINEER</p>
            <h1 class="h-1 m-b-h-1">Hi, I'm Ersin.</h1>
        </div>

        <p class="text-1 l-h-1-dot-5 t-a-j">
            Accusamus asperiores blanditiis doloremque, fugit laudantium magnam nam nihil, officia omnis quae
            quaerat quas quis sapiente sequi, sint sunt tempora ullam veniam.
        </p>

        <div class="m-t-d">
            <button class="button m-t-button" onclick={onClick}>LET'S MEET</button>
        </div>
    </div>
</section>

<style>
    .wrapper-image-section,
    .image-section {
        aspect-ratio: 680/790.16;
    }
</style>