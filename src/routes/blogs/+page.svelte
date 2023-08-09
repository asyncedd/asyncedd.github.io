<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<svelte:head>
	<title>async's blog</title>
</svelte:head>

<!-- Posts -->
<section class="h-[80vh] flex justify-center align-middle items-center">
	<div class="flex align-middle items-center justify-center">
		<ul class="posts">
			{#each data.posts as post}
				<li class="post">
					<a href="blogs/{post.slug}" class="title">{post.title}</a>
					<p class="dark:text-ctp-text text-ctp-base">{formatDate(post.date)}</p>
					<p class="description">{post.description}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.posts {
		display: grid;
		gap: 1rem;
	}

	.post:not(:last-child) {
		border-bottom: 1px solid #1e1e2e;
		padding-bottom: 5px;
	}

	:global(.dark) .post:not(:last-child) {
		border-bottom: 1px solid #cdd6f4;
		padding-bottom: 5px;
	}

	.title {
		font-size: 3rem;
		text-transform: capitalize;
	}

	.description {
		margin-top: var(--size-3);
	}
</style>
