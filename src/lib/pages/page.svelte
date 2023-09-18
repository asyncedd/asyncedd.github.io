<script>
	import { formatDate } from '$lib/utils';
	import Toc from '$lib/components/toc.svelte';
	import Category from '$lib/components/blog/category.svelte';
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
<div class="flex h-[100%] justify-center px-[1.5rem]">
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
			<Category categories={data.meta.categories} {Cat_URL} />
		</div>

		<div class="prose prose-as pb-[25rem]">
			<svelte:component this={data.content} />
		</div>
	</article>
</div>
