<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { fly } from 'svelte/transition';

	export let data;

	let value = '';

	$: filteredPosts =
		value === ''
			? data.filtered_list
			: data.filtered_list.filter((post) => post.title.toLowerCase().includes(value.toLowerCase()));
</script>

<svelte:head>
	<title>{data.params.slug}</title>
</svelte:head>

<!-- Posts -->
<main class="flex justify-center">
	<div class="gap-[1rem]">
		<h1 class="text-[clamp(3rem,3rem+3vw,5rem)] tracking-widest uppercase text-foreground_dark/75">
			<b> {data.params.slug} </b>
		</h1>
		<div class="w-full mb-4">
			<input
				class="placeholder:text-foreground_dark/50 text-foreground_dark font-bold block w-full px-4 py-2 bg-foreground_dark/25 rounded-md focus:outline-none"
				type="text"
				id="name"
				name="name"
				placeholder="Search articles"
				aria-label="Search articles"
				bind:value
			/>
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
							href={`/snippet/${post.slug}`}
							class="text-[3rem] capitalize text-foreground_dark/75 hover:text-foreground_dark transition-colors duration-[0.25s] ease-in-out hover:decoration-foreground_dark decoration-transparent underline tracking-wider"
						>
							<b>
								{post.title}
							</b>
						</a>
						<div class="flex gap-[20px] my-1">
							{#each post.categories as category}
								<a href="/snippet/category/{category}">
									<span class="bg-red-400 text-zinc-900 p-[4px] rounded-[0.5rem]"
										>&num;{category}</span
									>
								</a>
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
