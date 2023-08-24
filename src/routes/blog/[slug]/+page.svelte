<script lang="ts">
	import { formatDate } from '$lib/utils';
	import Toc from './toc.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<Toc />
<div class="flex justify-center h-[100%] mx-[5rem]">
	<article class="py-[10vh]" style="max-inline-size: 100%; margin-inline: auto;">
		<hgroup>
			<h1 class="capitalize font-bold text-[5rem] text-content">
				{data.meta.title}
			</h1>
			<p class="text-content_dark">
				Published at {formatDate(data.meta.date)}
			</p>
		</hgroup>

		<div class="flex gap-[20px] mt-[3rem]">
			{#each data.meta.categories as category}
				<span class="bg-red-300 text-zinc-900 p-[5px] rounded-[0.5rem]">&num;{category}</span>
			{/each}
		</div>

		<div class="prose prose-as pb-[25rem]">
			<svelte:component this={data.content} />
		</div>
	</article>
</div>
