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
