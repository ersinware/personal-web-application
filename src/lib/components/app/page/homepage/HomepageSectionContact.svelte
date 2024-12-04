<script>
    import '$lib/css/project/app/pages/homepage/project.section.homepage.contact.app.css'
    import {performRippleEffectForFramedButtonAndWait} from "$lib/js/client/common/util.ripple.common.client.js";
    import {EVENT_OPEN_MODAL} from "$lib/js/client/common/event.common.client.js";
    import ModalContact from "$lib/components/app/ModalContact.svelte";
    import LazyImage from "$lib/components/common/LazyImage.svelte";

    async function onClick(event) {
        await performRippleEffectForFramedButtonAndWait(event)

        window.dispatchEvent(
            new CustomEvent(
                EVENT_OPEN_MODAL,
                {
                    detail: {
                        component: ModalContact,
                        addToBackstack: true
                    }
                }
            )
        )
    }
</script>

<section class="flex f-column a-i-c g-v-d">
    <div class="wrapper-image-homepage-section-contact wrapper-image-section w-100">
        <LazyImage
                classes="image-homepage-section-contact image-section w-100"
                src="/images/homepage/contact-me.svg"
                alt="Software Engineer | Ersin Karaer, Software Engineer & Web Application Developer"/>
    </div>

    <div class="max-w-wrapper-section-texts">
        <h1 class="h-1 m-b-h-1">Let's Talk</h1>

        <p class="text-1 l-h-1-dot-5 t-a-j">
            Architecto, atque consequuntur deserunt dolores enim eos est laboriosam laudantium minus odio quaerat quam
            repellat sequi temporibus ullam, velit vitae voluptate iusto deserunt dolores.
        </p>

        <div class="m-t-d">
            <button class="button m-t-button" onclick={onClick}>MESSAGE ME</button>
        </div>
    </div>
</section>

<style>
    .wrapper-image-section {
        margin-bottom: 1.75rem;
    }
</style>