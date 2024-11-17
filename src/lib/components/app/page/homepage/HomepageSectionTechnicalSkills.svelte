<script>
    import '$lib/css/project/app/pages/homepage/project.section.homepage.technical.skills.app.css'

    import {onLinkClick} from "$lib/js/client/common/util.common.client.js";
    import LazyImage from "$lib/components/common/LazyImage.svelte";
</script>

<section
        class="b-box flex j-c-c a-i-c g-v-d w-full p-v-d-page p-r-d color-background-second big-screen-p-l-for-left-menu small-screen-f-column-reverse small-screen-p-l-d">

    <div class="max-w-wrapper-section-texts">
        <div class="grid g-dot75">
            <a href="/technical-skills"
               class="text-hint-3 w-max-content text-link f-w-700"
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
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                        alt="Technical Skill, Javascript | Ersin Karaer, Software Engineer & Web Application Developer"/>

                <LazyImage
                        id="icon-node-js-section-homepage-technical-skills"
                        classes="icon-section-homepage-technical-skills"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                        alt="Technical Skill, Node.js | Ersin Karaer, Software Engineer & Web Application Developer"/>

                <LazyImage
                        classes="icon-section-homepage-technical-skills"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg"
                        alt="Technical Skill, SvelteKit | Ersin Karaer, Software Engineer & Web Application Developer"/>
            </div>

            <div class="flex g-2dot5">
                <LazyImage
                        id="icon-mongo-db-section-homepage-technical-skills"
                        classes="icon-section-homepage-technical-skills"
                        src="/icon-mongodb.svg"
                        alt="Technical Skill, MongoDB | Ersin Karaer, Software Engineer & Web Application Developer"/>

                <LazyImage
                        id="icon-postgre-sql-section-homepage-technical-skills"
                        classes="icon-section-homepage-technical-skills"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                        alt="Technical Skill, PostgreSQL | Ersin Karaer, Software Engineer & Web Application Developer"/>
            </div>

            <LazyImage
                    id="icon-redis-section-homepage-technical-skills"
                    classes="icon-section-homepage-technical-skills"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
                    alt="Technical Skill, Redis | Ersin Karaer, Software Engineer & Web Application Developer"/>
        </div>
    </div>

    <div class="image-section image-section-homepage-technical-skills w-100">
        <LazyImage
                classes="image-section image-section-homepage-technical-skills w-100"
                src="/programming.svg"
                alt="Software Engineer | Ersin Karaer, Software Engineer & Web Application Developer"/>
    </div>
</section>

<style>
    .wrapper-icons {
        margin-top: 3.75rem;
    }
</style>