<script lang="ts">
	import { scale, fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	import { browser } from '$app/environment';

	const strings = ['dark', 'mocha', 'light'];
	let mode: string = 'light';

	function cycleStringsAutomatically() {
		let currentIndex = strings.indexOf(mode); // Start at 'light' by default

		currentIndex = (currentIndex + 1) % strings.length;
		return strings[currentIndex];
	}

	function handleSwitchDarkMode() {
		mode = cycleStringsAutomatically();
		localStorage.setItem('theme', mode);

		document.documentElement.classList.toggle('dark', mode === 'dark');
		document.documentElement.classList.toggle('mocha', mode === 'mocha');
		if (mode == 'light') {
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.remove('mocha');
		}
	}

	if (browser) {
		if (document.documentElement.classList.contains('dark')) {
			mode = 'dark';
		} else if (document.documentElement.classList.contains('mocha')) {
			mode = 'mocha';
		} else {
			mode = 'light';
		}
	}
</script>

<button
	on:click={handleSwitchDarkMode}
	aria-label="Toggle dark mode"
	tabindex="0"
	class="flex hover:fill-yellow-200 fill-content hover:cursor-pointer hover:scale-[1.2] transition duration-[200ms] origin-center ease-in-out justify-center"
>
	<div>
		<div class="relative">
			{#key mode}
				<i
					class="absolute dark opacity-0"
					out:scale
					in:fly={{
						y: 100,
						delay: 300,
						easing: backOut
					}}
					><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
						><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"
						/></svg
					></i
				>
				<i
					class="absolute light opacity-0"
					out:scale
					in:fly={{
						y: 100,
						delay: 300,
						easing: backOut
					}}
					><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"
						><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
						/></svg
					></i
				>
				<i
					class="absolute mocha opacity-0"
					out:scale
					in:fly={{
						y: 100,
						delay: 300,
						easing: backOut
					}}
					><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
						><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"
						/></svg
					></i
				>
			{/key}
		</div>
	</div>
</button>

<style>
	i {
		transition: color 0.5s ease-in-out, transform 0.5s ease-in-out, opacity 0.5s ease-in-out,
			fill 0.5s ease-in-out;
	}

	:global(.dark) .dark {
		opacity: 100;
	}

	:global(.light:not(.dark):not(.mocha)) .light {
		opacity: 1;
	}

	:global(.mocha) .mocha {
		opacity: 100;
	}
</style>
