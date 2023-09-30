<script>
	import { formatDate } from '$lib/utils';
	import Toc from '$lib/components/toc.svelte';
	import '$lib/styles/prose.postcss';

	export let data;
	/**
	 * A URL expression thing for the category
	 * ex. /blog/category/%s
	 * @type {string}
	 */
	export let Cat_URL = '/blog/category/%s';
	/**
	 * Whetever or not to show the TOC
	 * @type {boolean}
	 */
	export let TOC = false;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

{#if TOC}
	<Toc />
{/if}
<div class="-px-[1.5rem] mx-auto flex h-[100%] w-full max-w-[75rem] flex-col justify-center">
	<article style="max-inline-size: 100%; margin-inline: auto;">
		<hgroup>
			<h1 class="text-[5rem] capitalize tracking-widest text-foreground">
				<b>
					{data.meta.title}
				</b>
			</h1>
			<p class="text-foreground_dark">
				Published at {formatDate(data.meta.date)}
			</p>
		</hgroup>

		<div class="my-[1.5rem] flex gap-[20px]">
			{#each data.meta.categories as category}
				<a href={Cat_URL.replace('%s', category)}>
					<span class="rounded-[4px] bg-red-400 p-[4px] text-zinc-900">&num;{category}</span>
				</a>
			{/each}
		</div>

		<div class="prose prose-as pb-[25rem]">
			<svelte:component this={data.content} />
		</div>
	</article>
</div>
