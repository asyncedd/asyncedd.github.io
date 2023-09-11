<script lang="ts">
	let dropdownOpened = false;
	import { browser } from '$app/environment';

	import Item from '../dropdown/item.svelte';
	import Menu from '../dropdown/menu.svelte';

	let currentTheme: string | undefined;
	export let optionList: string[] = [];

	browser &&
		(() => {
			const setTheme = (newTheme: string) => {
				document.documentElement.className = currentTheme = newTheme;
			};

			window
				.matchMedia('(prefers-color-scheme: dark)')
				.addEventListener('change', (e) => setTheme(e.matches ? 'dark' : 'light'));
			window.addEventListener('storage', (e) => e.key === 'theme' && setTheme(e.newValue || ''));

			const handleGlobalClick = (event: MouseEvent) =>
				(dropdownOpened =
					dropdownOpened && !!(event.target as HTMLElement).closest('.dropdown-button-menu-theme'));

			document.addEventListener('click', handleGlobalClick);

			return () => {
				document.removeEventListener('click', handleGlobalClick);
			};
		})();
</script>

<div class="group">
	<button
		class="dropdown-button-menu-theme rounded-[0.5rem] p-[12px] ring-foreground hover:bg-background_lighter focus:ring active:ring"
		aria-label="theme switcher"
		on:click={() => {
			dropdownOpened = !dropdownOpened;
		}}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 32 32"
			class="flex items-center justify-center stroke-foreground dark:hidden"
			><path
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M16 6V3M8.929 8.929L6.808 6.808M6 16H3m13 13v-3m9.192-.808l-2.121-2.12M29 16h-3M8.929 23.071l-2.121 2.121M25.192 6.808l-2.12 2.121M22 16a6 6 0 1 1-12 0a6 6 0 0 1 12 0Z"
			/></svg
		>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 15 15"
			class="hidden items-center justify-center"
			><path
				fill-rule="evenodd"
				d="M2.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6V.5Zm3 3a.4.4 0 1 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6v-.6Zm-4 3a.4.4 0 1 0-.8 0v.6H.5a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6v-.6ZM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4A6.57 6.57 0 0 1 9.203 5.1a6.602 6.602 0 0 1-6.243 6.59c-.214.012-.333.264-.183.417a6.8 6.8 0 0 0 .21.206l.072.066l.26.226l.188.148l.121.09l.187.131l.176.115c.12.076.244.149.37.217l.264.135l.26.12l.303.122l.244.086a6.568 6.568 0 0 0 1.103.26l.317.04l.267.02a6.6 6.6 0 0 0 6.943-7.328l-.037-.277a6.557 6.557 0 0 0-.384-1.415l-.113-.268l-.077-.166l-.074-.148a6.602 6.602 0 0 0-.546-.883l-.153-.2l-.199-.24l-.163-.18l-.12-.124l-.16-.158l-.223-.2l-.32-.26l-.245-.177l-.292-.19l-.321-.186l-.328-.165l-.113-.052l-.24-.101l-.276-.104l-.252-.082l-.325-.09l-.265-.06l-.292-.053Zm1.86 4.318a7.578 7.578 0 0 0-.572-2.894a5.601 5.601 0 1 1-4.748 10.146a7.61 7.61 0 0 0 3.66-2.51a.749.749 0 0 0 1.355-.442a.75.75 0 0 0-.584-.732c.062-.116.122-.235.178-.355A1.25 1.25 0 1 0 10.35 6.2c.034-.295.052-.595.052-.9Z"
				clip-rule="evenodd"
			/></svg
		></button
	>
	{#if dropdownOpened}
		<Menu>
			{#each optionList as option}
				<Item>
					<button
						aria-label="set theme to {option}"
						class="inline-flex w-[100%] items-center justify-between rounded-[0.3rem] px-3 text-left text-[1.1rem] capitalize tracking-wide transition-[background] duration-[0.25s] ease-in-out hover:bg-background_lighter"
						on:click={() => {
							localStorage.theme = document.documentElement.className = option;
						}}
					>
						{option}
					</button>
				</Item>
			{/each}
		</Menu>
	{/if}
</div>
