<script lang="ts">
	import Lister from '$lib/pages/lister.svelte';

	export let data;
</script>

<Lister
	{data}
	title={'Blogs - tags'}
	placeholder={'Start typing'}
	URL={'/blog/category/%s'}
	Cat_URL={'/blog/category/%s'}
	list_type={'category'}
/>
