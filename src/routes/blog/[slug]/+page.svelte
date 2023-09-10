<script>
	import Page from '$lib/pages/page.svelte';

	export let data;
</script>

<Page {data} Cat_URL={'/blog/category/%s'} TOC={true} />
