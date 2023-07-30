<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy } from 'svelte';
	import { themeStore } from './store';

	let darkMode; // This variable will hold the current theme value from the store

	// Subscribe to the theme store to get updates whenever the theme changes
	const unsubscribe = themeStore.subscribe((value) => {
		darkMode = value;
	});

	// Don't forget to unsubscribe when the component is destroyed to avoid memory leaks
	onDestroy(() => {
		unsubscribe();
	});

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}
</script>

<div>
	<div on:click={handleSwitchDarkMode} class="text-[2rem]">
		<i
			class="fa-solid fa-{darkMode
				? 'sun'
				: 'moon'} hover:dark:text-ctp-yellow hover:text-ctp-lavender dark:text-ctp-text text-ctp-base"
		/>
	</div>
</div>

<style>
	i {
		transition: color 0.5s ease-in-out;
	}
</style>
