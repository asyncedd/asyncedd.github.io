<script lang="ts">
	import Page from '$lib/pages/page.svelte';

	export let data;
</script>

<Page
	{data}
	Cat_URL="/snippet/category/%s"
	options={{
		TOC: false
	}}
/>
