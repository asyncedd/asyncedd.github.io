<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { fly } from 'svelte/transition';

	export let data;
	export let title: string = '';
	export let placeholder: string = '';
	export let URL: string = '';
	export let Cat_URL: string = '';
	export let options = {
		type: 'lister'
	};

	let value = '';

	$: filteredPosts =
		value === ''
			? data.posts
			: data.posts.filter((post) => post.title.toLowerCase().includes(value.toLowerCase()));
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<!-- Posts -->
<main class="max-w-4xl w-full mx-auto flex flex-col">
	<div class="space-y-6 my-10">
		<section>
			<h1
				class="text-[clamp(3rem,3rem+3vw,5rem)] tracking-widest uppercase text-foreground_dark/75"
			>
				<b> {data.params.slug} </b>
			</h1>
			<div class="w-full mb-4 relative">
				<input
					class="placeholder:text-foreground_dark/50 text-foreground_dark font-bold block w-full px-4 py-2 bg-foreground_dark/25 rounded-md focus:outline-none"
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
					class="absolute w-5 h-5 right-3 top-2.5 text-gray-400"
					><path
						fill="currentColor"
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
						{#if options.type === 'lister'}
							<section
								class="my-1"
								in:fly={{ y: 100, duration: 500 }}
								out:fly={{ y: 100, duration: 50 }}
							>
								<hr class="border-[1px] border-foreground" />
								<a
									href={`${URL.replace('%s', post.slug)}`}
									class="text-[3rem] capitalize text-foreground_dark/75 hover:text-foreground_dark transition-colors duration-[0.25s] ease-in-out hover:decoration-foreground_dark decoration-transparent underline tracking-wider"
								>
									<b>
										{post.title}
									</b>
								</a>
								<div class="flex gap-[20px] my-1">
									{#each post.categories as category}
										<a href={Cat_URL.replace('%s', category)}>
											<span class="bg-red-400 text-zinc-900 p-[4px] rounded-[0.5rem]"
												>&num;{category}</span
											>
										</a>
									{/each}
								</div>
								<p class="text-foreground_dark">{formatDate(post.date)}</p>
								<p class="description text-foreground my-1">{post.description}</p>
							</section>
						{:else if options.type === 'category'}
							<hr class="border-[1px] border-foreground" />
							<a
								href="category/{post}"
								class="text-[3rem] capitalize text-foreground_dark/75 hover:text-foreground_dark transition-colors duration-[0.25s] ease-in-out hover:decoration-foreground_dark decoration-transparent underline tracking-wider"
								><b>{post}</b></a
							>
						{/if}
					{/each}
				</div>
			{/if}
		</section>
	</div>
</main>
