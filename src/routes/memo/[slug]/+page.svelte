<script>
	import Page from '$lib/pages/page.svelte';

	export let data;
</script>

<Page {data} Cat_URL={'/memo/category/%s'} TOC={false} />
