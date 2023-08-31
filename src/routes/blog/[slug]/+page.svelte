<script lang="ts">
	import { formatDate } from '$lib/utils';
	import Toc from './toc.svelte';
	import '../../../prose.postcss';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<Toc />
<div class="flex justify-center h-[100%] px-[1.5rem]">
	<article style="max-inline-size: 100%; margin-inline: auto;">
		<hgroup>
			<h1 class="capitalize text-[5rem] tracking-widest text-foreground">
				<b>
					{data.meta.title}
				</b>
			</h1>
			<p class="text-foreground_dark">
				Published at {formatDate(data.meta.date)}
			</p>
		</hgroup>

		<div class="flex gap-[20px] my-[1.5rem]">
			{#each data.meta.categories as category}
				<span class="bg-red-400 text-zinc-900 p-[4px] rounded-[0.5rem]">&num;{category}</span>
			{/each}
		</div>

		<div class="prose prose-as pb-[25rem]">
			<svelte:component this={data.content} />
		</div>
	</article>
</div>
