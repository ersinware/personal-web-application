<script>
    const { data } = $props()
</script>

<svelte:head>
    <title>'{data.article.title}' | Ersin Karaer, Software Engineer & Web Application Developer</title>
</svelte:head>

<h1 class="h-1 t-a-c">{data.article.title}</h1>