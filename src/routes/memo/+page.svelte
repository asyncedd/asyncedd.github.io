<script>
	import Lister from '$lib/pages/lister.svelte';

	export let data;
</script>

<Lister
	{data}
	title={'memos'}
	placeholder={'Start typing'}
	URL={'/memo/%s'}
	Cat_URL={'/memo/category/%s'}
/>
