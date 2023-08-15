<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<svelte:head>
	<title>async's blog</title>
</svelte:head>

<!-- Posts -->
<section class="h-[100vh] flex justify-center items-center">
	<div class="flex items-center justify-center">
		<div class="posts">
			<h1 class="text-5xl border-b-[1px] border-b-content_dark">BLOGS</h1>
			{#each data.posts as post}
				<div class="post">
					<a
						href={`blog/${post.slug}`}
						class="title text-content hover:text-sky-300 hover:dark:text-sky-200 transition-colors duration-[0.5s] ease-in-out"
					>
						{post.title}
					</a>
					<div class="tags my-3">
						{#each post.categories as category}
							<span class="bg-red-300 text-zinc-900 p-2 rounded-[0.5rem] gap-2 mx-1">
								&num;{category}
							</span>
						{/each}
					</div>
					<p class="text-content_dark">{formatDate(post.date)}</p>
					<p class="description text-content">{post.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style class="postcss">
	:root {
		--content-col: theme(colors.content);
	}
	.posts {
		display: grid;
		gap: 1rem;
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--content-col);
		padding-bottom: 5px;
	}

	.title {
		font-size: 3rem;
		text-transform: capitalize;
	}
</style>