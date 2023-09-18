<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { fly } from 'svelte/transition';

	import Category from '$lib/components/blog/category.svelte';

	type BlogData = {
		params: {
			slug: string;
		};
		posts: [
			{
				title: string;
				description: string;
				date: string;
				categories: Array<string>;
				published: string | boolean;
				slug: string;
			}
		];
	};

	export let data: BlogData;
	export let title: string = '';
	export let placeholder: string = '';
	export let URL: string = '';
	export let Cat_URL: string = '';
	export let list_type: 'lister' | 'category' = 'lister';
	let value: string = '';

	console.log(data.posts);
	$: filteredPosts =
		value === ''
			? data.posts
			: data.posts.filter((post) =>
					((post.title || post) as string).toLowerCase().includes(value.toLowerCase())
			  );
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<!-- Posts -->
<main class="mx-auto flex w-full max-w-4xl flex-col">
	<div class="my-10 space-y-6">
		<section>
			<h1
				class="text-foreground_dark/85 text-[clamp(3rem,3rem+3vw,5rem)] uppercase tracking-widest"
			>
				<b> {data.params.slug} </b>
			</h1>
			<div class="relative mb-4 w-full">
				<input
					class="block w-full rounded-[4px] bg-foreground_dark/[.15] px-4 py-2 font-bold text-foreground_dark placeholder:text-foreground_dark/50 focus:outline-none"
					type="text"
					id="name"
					name="name"
					{placeholder}
					aria-label={placeholder}
					bind:value
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 32 32"
					class="absolute right-3 top-2.5 h-5 w-5 fill-gray-900 dark:fill-gray-300"
					><path
						d="M19 3C13.488 3 9 7.488 9 13c0 2.395.84 4.59 2.25 6.313L3.281 27.28l1.439 1.44l7.968-7.969A9.922 9.922 0 0 0 19 23c5.512 0 10-4.488 10-10S24.512 3 19 3zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8s-8-3.57-8-8s3.57-8 8-8z"
					/></svg
				>
			</div>
		</section>
		<section>
			{#if filteredPosts.length === 0}<p
					in:fly={{ y: 100, duration: 500 }}
					out:fly={{ y: 100, duration: 50 }}
				>
					Sorry. No results :P
				</p>{:else}
				<div in:fly={{ y: 100, duration: 500 }} out:fly={{ y: 100, duration: 50 }}>
					{#each filteredPosts as post}
						{#if list_type === 'lister'}
							<section
								class="my-1"
								in:fly={{ y: 100, duration: 500 }}
								out:fly={{ y: 100, duration: 50 }}
							>
								<hr class="border-[1px] border-foreground" />
								<a
									href={`${URL.replace('%s', post.slug)}`}
									class="text-[3rem] capitalize tracking-wide text-foreground_dark/80 underline decoration-transparent transition-colors duration-[0.25s] ease-in-out hover:text-foreground_dark hover:decoration-foreground_dark"
								>
									{post.title}
								</a>
								<div class="my-1 flex gap-[20px]">
									<Category categories={post.categories} {Cat_URL} />
								</div>
								<p class="text-foreground_dark">{formatDate(post.date)}</p>
								<p class="description my-1 text-foreground">{post.description}</p>
							</section>
						{/if}
						{#if list_type === 'category'}
							<hr class="border-[1px] border-foreground" />
							<a
								href={`${URL.replace('%s', post.slug)}`}
								class="text-[3rem] capitalize tracking-wider text-foreground_dark/75 underline decoration-transparent transition-colors duration-[0.25s] ease-in-out hover:text-foreground_dark hover:decoration-foreground_dark"
								>{post}</a
							>
						{/if}
					{/each}
				</div>
			{/if}
		</section>
	</div>
</main>
