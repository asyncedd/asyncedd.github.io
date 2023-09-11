<script lang="ts">
	let dropdownOpened: boolean = false;
	import { browser } from '$app/environment';

	import Item from '../dropdown/item.svelte';
	import Menu from '../dropdown/menu.svelte';

	type LinkData = {
		name: String;
		href: string;
	};

	export let optionList: LinkData[] = [];

	browser &&
		(() => {
			const handleGlobalClick = (event: MouseEvent) =>
				(dropdownOpened =
					dropdownOpened && !!(event.target as HTMLElement).closest('.dropdown-button-menu-menu'));

			document.addEventListener('click', handleGlobalClick);

			return () => {
				document.removeEventListener('click', handleGlobalClick);
			};
		})();
</script>

<div class="group inline-flex md:hidden">
	<button
		class="dropdown-button-menu-menu rounded-[0.5rem] p-[12px] ring-foreground hover:bg-background_lighter focus:ring active:ring"
		aria-label="theme switcher"
		on:click={() => {
			dropdownOpened = !dropdownOpened;
		}}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1.5em"
			height="1.5em"
			viewBox="0 0 256 256"
			class="fill-foreground"
			><path
				fill="currentColor"
				d="M137.54 186.36a8 8 0 0 1 0 11.31l-9.94 10a56 56 0 0 1-79.22-79.27l24.12-24.12a56 56 0 0 1 76.81-2.28a8 8 0 1 1-10.64 12a40 40 0 0 0-54.85 1.63L59.7 139.72a40 40 0 0 0 56.58 56.58l9.94-9.94a8 8 0 0 1 11.32 0Zm70.08-138a56.08 56.08 0 0 0-79.22 0l-9.94 9.95a8 8 0 0 0 11.32 11.31l9.94-9.94a40 40 0 0 1 56.58 56.58l-24.12 24.14a40 40 0 0 1-54.85 1.6a8 8 0 1 0-10.64 12a56 56 0 0 0 76.81-2.26l24.12-24.12a56.08 56.08 0 0 0 0-79.24Z"
			/></svg
		>
		{#if dropdownOpened}
			<Menu>
				<li class="flex border-b-[1px] border-b-background_lighter p-[2px] last:border-b-0">
					<a
						aria-label="Go to /"
						class="inline-flex w-[100%] items-center justify-between rounded-[0.3rem] px-3 text-left text-[1.1rem] tracking-wide transition-[background] duration-[0.25s] ease-in-out hover:bg-background_lighter"
						href="/"
					>
						"/"
					</a>
				</li>
				{#each optionList as option}
					<Item>
						<a
							aria-label="Go to {option.name}"
							class="inline-flex w-[100%] items-center justify-between rounded-[0.3rem] px-3 text-left text-[1.1rem] tracking-wide transition-[background] duration-[0.25s] ease-in-out hover:bg-background_lighter"
							href={option.href}
						>
							{option.name}
						</a>
					</Item>
				{/each}
			</Menu>
		{/if}
	</button>
</div>
