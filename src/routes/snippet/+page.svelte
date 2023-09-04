<script lang="ts">
	import Lister from '$lib/pages/lister.svelte';

	export let data;
</script>

<Lister
	{data}
	title={'Snippets'}
	placeholder={'Start typing'}
	URL={'/snippet/%s'}
	Cat_URL={'/snippet/category/%s'}
/>
