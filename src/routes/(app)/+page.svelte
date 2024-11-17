<script>
    import SectionHomepageHi from "$lib/components/app/page/homepage/HomepageSectionHi.svelte";
    import SectionHomepageTechnicalSkills
        from "$lib/components/app/page/homepage/HomepageSectionTechnicalSkills.svelte";
    import SectionHomepagePortfolio from "$lib/components/app/page/homepage/portfolio/HomepageSectionPortfolio.svelte";
    import SectionHomepageBlog from "$lib/components/app/page/homepage/HomepageSectionBlog.svelte";
</script>

<svelte:head>
    <title>Homepage | Ersin Karaer, Software Engineer & Web Application Developer</title>
</svelte:head>

<div class="grid g-v-page">
    <SectionHomepageHi/>
    <SectionHomepageTechnicalSkills/>
    <SectionHomepagePortfolio/>
    <SectionHomepageBlog/>
</div>


