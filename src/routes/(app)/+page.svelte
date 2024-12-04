<script>
    import '$lib/css/project/app/pages/homepage/project.homepage.app.css'

    import HomepageSectionHi from "$lib/components/app/page/homepage/HomepageSectionHi.svelte";
    import HomepageSectionTechnicalSkills
        from "$lib/components/app/page/homepage/HomepageSectionTechnicalSkills.svelte";
    import HomepageSectionPortfolio from "$lib/components/app/page/homepage/portfolio/HomepageSectionPortfolio.svelte";
    import HomepageSectionBlog from "$lib/components/app/page/homepage/HomepageSectionBlog.svelte";
    import HomepageSectionContact from "$lib/components/app/page/homepage/HomepageSectionContact.svelte";
</script>

<svelte:head>
    <link rel="preload"
          href="/images/cherry-blossom.svg"
          as="image"
          type="image/svg+xml"
          fetchpriority="high"
          media="(min-width: 65.001em)">

    <title>Ersin Karaer, Software Engineer & Web Application Developer</title>
</svelte:head>

<div class="grid g-v-page">
    <HomepageSectionHi/>
    <HomepageSectionTechnicalSkills/>
    <HomepageSectionPortfolio/>
    <HomepageSectionBlog/>
    <HomepageSectionContact/>
</div>