<script>
	export let categories;
	export let Cat_URL;
</script>

{#each categories as category}
	<a href={Cat_URL.replace('%s', category)}>
		<span class="rounded-[4px] bg-red-400 p-[4px] text-zinc-900">&num;{category}</span>
	</a>
{/each}
