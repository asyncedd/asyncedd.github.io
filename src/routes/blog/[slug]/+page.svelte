<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="flex justify-center h-[100%] my-[10vh]">
	<article>
		<!-- Title -->
		<hgroup>
			<h1 class="capitalize font-bold text-[5rem] dark:text-zinc-50 text-zinc-900">
				{data.meta.title}
			</h1>
			<p class="text-zinc-500 dark:text-zinc-50">
				Published at {formatDate(data.meta.date)}
			</p>
		</hgroup>

		<!-- Tags -->
		<div class="tags mt-[3rem]">
			{#each data.meta.categories as category}
				<span class="bg-red-200 text-zinc-900 p-[5px] rounded-[0.5rem]">&num;{category}</span>
			{/each}
		</div>

		<!-- Post -->
		<div class="prose dark:prose-dark prose-light">
			<svelte:component this={data.content} />
		</div>
	</article>
</div>

<style>
	article {
		max-inline-size: 100%;
		margin-inline: auto;
	}

	.tags {
		display: flex;
		gap: 20px;
	}
</style>
