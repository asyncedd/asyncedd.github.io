<script lang="ts">
	import { browser } from '$app/environment';

	let darkMode = true;

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<div>
	<div on:click={handleSwitchDarkMode} class="text-[2rem]">
		<i class="fa-solid fa-{darkMode ? 'sun' : 'moon'} dark:text-ctp-yellow text-ctp-lavender" />
	</div>
</div>

<style lang="postcss">
	#theme-toggle + label {
		@apply inline-block cursor-pointer h-12 w-12 top-6 right-24 rounded-full duration-300 content-[''];
	}
</style>
