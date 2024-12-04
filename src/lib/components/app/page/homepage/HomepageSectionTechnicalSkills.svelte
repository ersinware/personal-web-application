<script>
    import '$lib/css/project/app/pages/homepage/project.section.homepage.technical.skills.app.css'

    import {onLinkClick} from "$lib/js/client/common/util.common.client.js";
    import LazyImage from "$lib/components/common/LazyImage.svelte";
</script>

<section id="wrapper-homepage-section-technical-skills"
         class="b-box flex j-c-c a-i-c g-v-d w-full p-v-d-page p-r-d color-background-second big-screen-p-l-for-left-menu small-screen-f-column-reverse small-screen-p-l-d">

    <div class="wrapper-texts max-w-small-wrapper-section-texts">
        <div class="grid g-dot75">
            <a href="/technical-skills"
               class="text-hint-3 text-link w-max-content f-w-700"
               onclick={onLinkClick}>

                EXPLORE ALL
            </a>

            <h1 class="h-1 m-b-h-1">Technical Skills</h1>
        </div>

        <p class="text-1 l-h-1-dot-5 t-a-j">
            Accusamus asperiores blanditiis doloremque, fugit laudantium magnam nam nihil, officia omnis quae
            quaerat quas quis sapiente sequi, sint sunt tempora ullam veniam.
        </p>

        <div class="wrapper-icons grid g-2">
            <div class="flex g-2dot5">
                <LazyImage
                        classes="icon-section-homepage-technical-skills"
                        src="/images/technical-skills/javascript.svg"
                        alt="Technical Skill, Javascript | Ersin Karaer, Software Engineer & Web Application Developer"/>

                <LazyImage
                        classes="icon-node-js-section-homepage-technical-skills icon-section-homepage-technical-skills"
                        src="/images/technical-skills/node-js.svg"
                        alt="Technical Skill, Node.js | Ersin Karaer, Software Engineer & Web Application Developer"/>

                <LazyImage
                        classes="icon-svelte-section-homepage-technical-skills icon-section-homepage-technical-skills"
                        src="/images/technical-skills/svelte.svg"
                        alt="Technical Skill, SvelteKit | Ersin Karaer, Software Engineer & Web Application Developer"/>
            </div>

            <div class="flex g-2dot5">
                <LazyImage
                        classes="icon-mongo-db-section-homepage-technical-skills icon-section-homepage-technical-skills"
                        src="/images/technical-skills/mongodb.svg"
                        alt="Technical Skill, MongoDB | Ersin Karaer, Software Engineer & Web Application Developer"/>

                <LazyImage
                        classes="icon-postgre-sql-section-homepage-technical-skills icon-section-homepage-technical-skills"
                        src="/images/technical-skills/postgresql.svg"
                        alt="Technical Skill, PostgreSQL | Ersin Karaer, Software Engineer & Web Application Developer"/>
            </div>

            <LazyImage
                    classes="icon-redis-section-homepage-technical-skills icon-section-homepage-technical-skills"
                    src="/images/technical-skills/redis.svg"
                    alt="Technical Skill, Redis | Ersin Karaer, Software Engineer & Web Application Developer"/>
        </div>
    </div>

    <div class="wrapper-image-section-homepage-technical-skills wrapper-image-section w-100">
        <LazyImage
                classes="image-section-homepage-technical-skills image-section w-100"
                src="/images/homepage/technical-skills.svg"
                alt="Software Engineer | Ersin Karaer, Software Engineer & Web Application Developer"/>
    </div>
</section>

<style>
    .wrapper-icons {
        margin-top: 3.75rem;
    }

    @media (min-width: 65.001em) {
        .wrapper-texts {
            margin-bottom: calc(var(--p-v) * -1);
        }
    }
</style>