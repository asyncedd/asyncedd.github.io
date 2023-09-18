<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let tableOfContents: HTMLUListElement | string | undefined;
	let showSidebar = false;
	let opened = false;

	function openSidebar() {
		const targetEl = document.querySelector('#table-of-contents');
		if (!targetEl) return () => {};
		const observer = new IntersectionObserver(([entry]) => {
			showSidebar = !opened && entry.boundingClientRect.top < 200;
		});
		observer.observe(targetEl);
		return () => observer.disconnect();
	}

	onMount(() => {
		function handleScroll() {
			if (!opened && window.innerWidth >= 1440) {
				openSidebar();
			}
		}

		window.onscroll = handleScroll;

		tableOfContents = document.querySelector('#table-of-contents + ul').outerHTML;
	});

	function toggleSidebar() {
		showSidebar = !showSidebar;
		opened = true;
	}
</script>

<aside
	class="fixed right-[8px] z-10 -mt-[calc(clamp(0.5rem,0.5rem+3vw,3rem)*4)] flex h-[calc(100svh+clamp(0.5rem,0.5rem+3vw,3rem)*2+2.5rem)] max-w-[calc(clamp(5rem,5rem+10vw,17rem))] items-center"
>
	<section>
		<nav
			class="table-of-contents rounded-[4px] bg-background_light bg-opacity-50 p-[0.7rem] saturate-150 backdrop-blur-[17px]"
			in:fly={{ x: '100%', duration: 500, delay: 500 }}
			out:fly={{ x: '100%', duration: 500 }}
		>
			<div class="flex items-center p-[0.3rem]">
				{#if showSidebar}
					<button
						on:click={toggleSidebar}
						aria-label="Hide table of contents"
						in:fly={{ x: '100%', duration: 500 }}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							class="stroke-foreground"
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
				{:else}
					<button
						on:click={toggleSidebar}
						in:fly={{ x: '100%', duration: 500 }}
						aria-label="Show table of contents"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							class="stroke-foreground"
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
			</div>
			{#if showSidebar}
				<div
					class="table-of-contents p-[1rem]"
					in:fly={{ x: '100%', duration: 30, delay: 30 }}
					out:fly={{ x: '100%', duration: 30 }}
				>
					<h2 class="uppercase tracking-wider text-foreground_dark/75">
						<b>Table of contents</b>
					</h2>
					<ol class="p-[0.3rem]">
						{@html tableOfContents}
					</ol>
				</div>
			{/if}
		</nav>
	</section>
</aside>

<style lang="postcss">
	:global(.table-of-contents ul) {
		overflow-y: scroll;
	}

	.table-of-contents {
		counter-reset: section;
	}

	:global(.table-of-contents li) {
		margin-top: 16px;
	}

	:global(.table-of-contents a) {
		display: inline-block;
		color: theme(colors.foreground);
		text-decoration-color: transparent;
		text-decoration-line: underline;
		font-weight: 400;
		transition: color 0.5s ease-in-out, text-decoration-color 0.5s ease-in-out;
	}

	:global(.table-of-contents a):hover {
		text-decoration-color: theme(colors.foreground);
	}

	:global(.table-of-contents a::before) {
		all: unset;
		counter-increment: section;
		content: counter(section) '. ';
	}
</style>
