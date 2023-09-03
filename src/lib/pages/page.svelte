<script lang="ts">
	import { formatDate } from '$lib/utils';
	import Toc from '$lib/components/toc.svelte';
	import '$lib/styles/prose.postcss';

	export let data;
	export let Cat_URL = '/blog/category/%s';
	export let options = {
		TOC: false
	};
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

{#if options.TOC}
	<Toc />
{/if}
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
				<a href={Cat_URL.replace('%s', category)}>
					<span class="bg-red-400 text-zinc-900 p-[4px] rounded-[0.5rem]">&num;{category}</span>
				</a>
			{/each}
		</div>

		<div class="prose prose-as pb-[25rem]">
			<svelte:component this={data.content} />
		</div>
	</article>
</div>
