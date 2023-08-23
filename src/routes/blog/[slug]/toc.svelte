<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let tableOfContents = null;
	let showSidebar = false;

	function getTableOfContents() {
		const postTableOfContentsEl = document.querySelector(
			'#table-of-contents + ul'
		) as HTMLUListElement;
		tableOfContents = postTableOfContentsEl.outerHTML;
	}

	function openSidebar() {
		const targetEl = document.querySelector('#table-of-contents');
		const observer = new IntersectionObserver(([entry]) => {
			entry.boundingClientRect.bottom < 0 ? (showSidebar = true) : (showSidebar = false);
		});
		observer.observe(targetEl);

		return () => {
			observer.unobserve(targetEl);
		};
	}

	onMount(() => {
		getTableOfContents();

		const isLargeScreen = window.innerWidth >= 1440;

		if (isLargeScreen) {
			return openSidebar();
		}
	});

	function toggleSidebar() {
		showSidebar = !showSidebar;
	}
</script>

<aside class="max-w-[280px] fixed top-[40%] right-[8px] z-10">
	<section>
		{#if !showSidebar}
			<button
				on:click={toggleSidebar}
				in:fly={{ x: '100%', duration: 300, delay: 300 }}
				class="sidebar-toggle p-[1.5rem] bg-primary_light rounded-[1rem]"
				aria-label="Show table of contents"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="stroke-content"
					><path
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m11 7l-5 5l5 5m6-10l-5 5l5 5"
					/></svg
				>
			</button>
		{/if}

		{#if showSidebar}
			<div
				class="bg-primary_light p-[1.5rem] rounded-[1rem] table-of-contents"
				transition:fly={{ x: '100%', duration: 300 }}
			>
				<button on:click={toggleSidebar} aria-label="Hide table of contents">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="stroke-content"
						><path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m7 7l5 5l-5 5m6-10l5 5l-5 5"
						/></svg
					>
				</button>

				<h2 class="font-mono capitalize">Table of contents</h2>
				{@html tableOfContents}
			</div>
		{/if}
	</section>
</aside>

<style lang="postcss">
	:global(.table-of-contents ul) {
		max-height: 400px;
		overflow-y: scroll;
	}

	.table-of-contents {
		counter-reset: section;
	}

	:global(.table-of-contents li) {
		margin-top: 16px;
		font-weight: 400;
	}

	:global(.table-of-contents a) {
		display: inline-block;
		color: theme(colors.accent);
		text-decoration-color: transparent;
		text-decoration-line: underline;
		font-weight: 400;
		transition: text-decoration-color 0.5s ease-in-out;
	}

	:global(.table-of-contents a):hover {
		text-decoration-color: theme(colors.accent);
	}

	:global(.table-of-contents a::before) {
		all: unset;
		counter-increment: section;
		content: counter(section) '. ';
	}
</style>
