<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { fly } from 'svelte/transition';

	export let data;

	let value = '';

	$: filteredPosts =
		value === ''
			? data.posts
			: data.posts.filter((post) => post.title.toLowerCase().includes(value.toLowerCase()));
</script>

<svelte:head>
	<title>Snippets</title>
</svelte:head>

<!-- Posts -->
<main class="h-[100vh] flex justify-center">
	<div class="gap-[1rem]">
		<h1 class="text-[clamp(3rem,3rem+3vw,5rem)] tracking-widest uppercase text-foreground_dark/75">
			<b> Snippets </b>
		</h1>
		<div class="relative w-full mb-4">
			<input
				class="placeholder:text-foreground_dark/50 text-foreground_dark font-bold block w-full px-4 py-2 bg-foreground_dark/25 rounded-md focus:outline-none"
				type="text"
				id="name"
				name="name"
				placeholder="Search articles"
				aria-label="Search articles"
				required
				minlength="4"
				maxlength="8"
				size="10"
				bind:value
			/><svg
				class="absolute w-5 h-5 right-3 top-3 text-gray-400"
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 32 32"
				><path
					fill="currentColor"
					d="M19 3C13.488 3 9 7.488 9 13c0 2.395.84 4.59 2.25 6.313L3.281 27.28l1.439 1.44l7.968-7.969A9.922 9.922 0 0 0 19 23c5.512 0 10-4.488 10-10S24.512 3 19 3zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8s-8-3.57-8-8s3.57-8 8-8z"
				/></svg
			>
		</div>
		{#if filteredPosts.length === 0}<p
				in:fly={{ y: 100, duration: 500 }}
				on:fly={{ y: 100, duration: 500 }}
			>
				Sorry. No results :P
			</p>{:else}
			<div in:fly={{ y: 100, duration: 500 }} on:fly={{ y: 100, duration: 500 }}>
				{#each filteredPosts as post}
					<section
						class="my-1"
						in:fly={{ y: 100, duration: 500 }}
						on:fly={{ y: 100, duration: 500 }}
					>
						<hr class="border-[1px] border-foreground" />
						<a
							href={`snippet/${post.slug}`}
							class="text-[3rem] capitalize text-foreground_dark/75 hover:text-foreground_dark transition-colors duration-[0.25s] ease-in-out hover:decoration-foreground_dark decoration-transparent underline tracking-wider"
						>
							<b>
								{post.title}
							</b>
						</a>
						<div class="flex gap-[20px] my-1">
							{#each post.categories as category}
								<span class="bg-red-400 text-zinc-900 p-[4px] rounded-[0.5rem]"
									>&num;{category}</span
								>
							{/each}
						</div>
						<p class="text-foreground_dark">{formatDate(post.date)}</p>
						<p class="description text-foreground my-1">{post.description}</p>
					</section>
				{/each}
			</div>
		{/if}
	</div>
</main>
