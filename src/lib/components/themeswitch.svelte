<script>
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { browser } from '$app/environment';

	const options = [
		{ id: 'light', label: '☀️  Light' },
		{ id: 'dark', label: '🌑 Dark' },
		{ id: 'mocha', label: '☕ Mocha' },
		{ id: 'oled', label: '⚫ OLED' }
	];

	let isDropdownOpen = false;

	/**
	 * A function for selecting a specifc theme
	 *
	 * @param {string} option - the theme to change
	 */
	let currentTheme = 'light';

	browser &&
		(() => {
			currentTheme = document.documentElement.className =
				localStorage.theme ||
				(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

			/**
			 * A helper utility to set the theme
			 *
			 * @param {string} newTheme
			 */
			const setTheme = (newTheme) => {
				if (currentTheme !== newTheme && !localStorage.theme && newTheme !== '') {
					document.documentElement.className = currentTheme = newTheme;
				}
			};

			window
				.matchMedia('(prefers-color-scheme: dark)')
				.addEventListener('change', (e) => setTheme(e.matches ? 'dark' : 'light'));
			window.addEventListener('storage', (e) => e.key === 'theme' && setTheme(e.newValue || ''));

			/**
			 * Handles global click events at ludicrous speed using a sneaky assignment trick.
			 * @param {MouseEvent} event - The click event object.
			 */
			const handleGlobalClick = (event) =>
				(isDropdownOpen =
					isDropdownOpen &&
					!!(/** @type {HTMLElement} */ (event.target).closest('.dropdown-button')));

			document.addEventListener('click', handleGlobalClick);

			return () => {
				document.removeEventListener('click', handleGlobalClick);
			};
		})();
</script>

<div
	aria-label="Select theme"
	class="transition duration-[200ms] origin-center ease-in-out justify-center text-[1rem] dropdown-button flex mx-[1vw] my-[5px] relative"
>
	<button
		class="fill-content hover:rotate-[180deg] transition-transform duration-[1s] ease-in-out"
		on:click={() => {
			isDropdownOpen = !isDropdownOpen;
		}}
		aria-label="Select theme"
		tabindex="0"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="2.5em"
			viewBox="0 0 24 24"
			aria-label="Select theme SVG"
			><path
				d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98Zm-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2Z"
			/></svg
		>
	</button>
	{#if isDropdownOpen}
		<div
			class="mt-[50px] w-[130px] mr-[50px] bg-primary border border-primary_dark shadow-md rounded-md absolute flex-col justify-center"
			out:fly={{
				y: -10,
				easing: backOut
			}}
			in:fly={{
				y: 100,
				easing: backOut
			}}
		>
			{#each options as option}
				<button
					class="flex w-full text-left px-4 py-2 hover:bg-primary_light/75 text-content {currentTheme ===
					option.id
						? 'bg-primary_light'
						: ''} rounded-md items-center justify-between"
					on:click={() => {
						currentTheme = localStorage.theme = document.documentElement.className = option.id;
					}}
				>
					<span>{option.label}</span>
					{#if currentTheme === option.id}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="1em"
							viewBox="0 0 32 32"
							aria-label="The current theme"
							class="fill-accent"
						>
							<path d="m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z" />
						</svg>
					{/if}
				</button>
			{/each}
		</div>
	{/if}
</div>
