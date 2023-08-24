<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	/** @type {HTMLUListElement | string | null} */
	let tableOfContents = null;
	/** @type {HTMLUListElement | null} */
	let postTableOfContentsEl = null;
	let showSidebar = false;
	let opened = false;

	function getTableOfContents() {
		if (postTableOfContentsEl) {
			tableOfContents = postTableOfContentsEl.outerHTML;
		}
	}

	function openSidebar() {
		const targetEl = document.querySelector('#table-of-contents');

		if (!targetEl) return () => {};

		const observer = new IntersectionObserver(([entry]) => {
			showSidebar = !opened && entry.boundingClientRect.top < 200;
		});
		observer.observe(targetEl);

		// return () => observer.disconnect();
	}

	onMount(() => {
		function handleScroll() {
			if (!opened && window.innerWidth >= 1440) {
				openSidebar();
				window.onscroll = null;
			}
		}

		postTableOfContentsEl = /** @type {HTMLUListElement} */ (
			document.querySelector('#table-of-contents + ul')
		);

		window.onscroll = handleScroll;

		getTableOfContents();

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const id = entry.target.getAttribute('id');
				const navLink = document.querySelector(`ul li a[href="#${id}"]`);

				if (navLink && id != 'table-of-contents') {
					if (entry.intersectionRatio > 0) {
						navLink.classList.add('active');
					} else {
						navLink.classList.remove('active');
					}
				}
			});
		});

		// Track all sections that have an `id` applied
		document.querySelectorAll('section[id]').forEach((section) => {
			observer.observe(section);
		});
	});

	function toggleSidebar() {
		showSidebar = !showSidebar;
		opened = true;
	}
</script>

<aside class="max-w-[280px] fixed right-[8px] z-10 flex items-center h-[100svh]">
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
			<nav
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
				<ol>
					{@html tableOfContents}
				</ol>
			</nav>
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
		color: theme(colors.content);
		text-decoration-color: transparent;
		text-decoration-line: underline;
		font-weight: 400;
		transition: color 0.5s ease-in-out, text-decoration-color 0.5s ease-in-out;
	}

	:global(.table-of-contents a):hover {
		text-decoration-color: theme(colors.content);
	}

	:global(.table-of-contents a::before) {
		all: unset;
		counter-increment: section;
		content: counter(section) '. ';
	}

	:global(.table-of-contents .active) {
		color: theme(colors.accent);
	}

	:global(.table-of-contents .active):hover {
		text-decoration-color: theme(colors.accent);
	}
</style>
