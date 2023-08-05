<script lang="ts">
	import { browser } from '$app/environment';

	let darkMode = true;
	let loaded = false;
	let isGoingDown = false;
	let delay = 500; // Adjust this delay (in milliseconds) as needed

	function handleSwitchDarkMode() {
		if (isGoingDown) {
			// Logic to go down here
			isGoingDown = false;
			const icon = document.getElementById('toggleIcon');
			icon.style.opacity = 1;
			icon.style.transform = 'translateY(0)';
		} else {
			darkMode = !darkMode;
			localStorage.setItem('theme', darkMode ? 'dark' : 'light');

			darkMode
				? document.documentElement.classList.add('dark')
				: document.documentElement.classList.remove('dark');

			// Logic to decrease opacity here
			isGoingDown = true;
			const icon = document.getElementById('toggleIcon');
			icon.style.opacity = 0.0; /* Set the desired opacity value */
			icon.style.transform = 'translateY(20px)'; /* Set the desired downward transition distance */

			setTimeout(() => {
				icon.style.transform =
					'translateY(-20px)'; /* Set the desired downward transition distance */

				setTimeout(() => {
					// After the delay, set isGoingDown to false to allow another click
					isGoingDown = false;
					icon.style.transform = 'translateY(0)';
					icon.style.opacity = 1;
				}, delay / 1.1);
			}, delay);
		}
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
		loaded = true;
	}
</script>

<div>
	<div on:click={handleSwitchDarkMode}>
		<i
			id="toggleIcon"
			class="fa-solid hover:dark:text-ctp-yellow hover:text-ctp-lavender dark:text-ctp-text text-ctp-base"
		/>
	</div>
</div>

<style>
	i {
		transition: color 0.5s ease-in-out, transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
	}

	i:hover {
		transform: scale(1.2);
	}

	:global(.dark) i::before {
		content: '\f185';
	}

	i::before {
		content: '\f186';
	}
</style>
