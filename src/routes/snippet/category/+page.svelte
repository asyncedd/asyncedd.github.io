<script lang="ts">
	import { fly } from 'svelte/transition';

	export let data;

	let value = '';

	$: filteredCategory =
		value === ''
			? data.categories
			: data.categories.filter((post) => post.toLowerCase().includes(value.toLowerCase()));
</script>

<!-- Posts -->
<main class="flex justify-center">
	<div class="gap-[1rem]">
		<h1 class="text-[clamp(3rem,3rem+3vw,5rem)] tracking-widest uppercase text-foreground_dark/75">
			<b> Tags </b>
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
		{#if filteredCategory.length === 0}<p
				in:fly={{ y: 100, duration: 500 }}
				out:fly={{ y: 100, duration: 50 }}
			>
				Sorry. No results :P
			</p>{:else}
			<div in:fly={{ y: 100, duration: 500 }} out:fly={{ y: 100, duration: 50 }}>
				{#each filteredCategory as cat}
					<hr class="border-[1px] border-foreground" />
					<a
						href="category/{cat}"
						class="text-[3rem] capitalize text-foreground_dark/75 hover:text-foreground_dark transition-colors duration-[0.25s] ease-in-out hover:decoration-foreground_dark decoration-transparent underline tracking-wider"
						><b>{cat}</b></a
					>
				{/each}
			</div>
		{/if}
	</div>
</main>
