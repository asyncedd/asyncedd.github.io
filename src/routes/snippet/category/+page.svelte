<script lang="ts">
	import Lister from '$lib/pages/lister.svelte';

	export let data;
</script>

<Lister
	{data}
	title={'Snippet - tags'}
	placeholder={'Start typing'}
	URL={'/snippet/%s'}
	Cat_URL={'/snippet/category/%s'}
	options={{
		type: 'category'
	}}
/>
