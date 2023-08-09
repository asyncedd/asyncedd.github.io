<script>
	import { page } from '$app/stores';
	import Hackerman, { animating } from '../components/hackerman.svelte'; // If you're using the Hackerman component
	import Navbar from '../components/navbar.svelte';
	import Typewriter from '../components/typewriter.svelte';

	let p = [
		"This isn't the site you're looking for.",
		"Maybe you're a time traveler who's looking for a new home :')",
		'But why wait? Just go back home :D!',
		'Do you see that little button down here?',
		'Like that button righhttttt over there',
		'Go',
		'click',
		'it',
		':q!',
		'kthxbye'
	];
</script>

<Hackerman />

<body class="dark:bg-ctp-base bg-ctp-blue">
	<Navbar />
	<div class="flex justify-center items-center min-h-screen">
		<div>
			<div class="h1-container">
				<div class="dark:text-ctp-text text-ctp-base text-[3rem] flex justify-center">
					<h1
						class:animating={$animating === true}
						data-value="{$page.status}| {$page.error.message}"
					>
						{$page.status}| {$page.error.message}
					</h1>
				</div>
			</div>
			<div class="text-center mt-4 dark:text-ctp-text text-ctp-base typewriter-container">
				<div class="text-center">
					<Typewriter sentences={p} />
				</div>
			</div>

			<div
				class="text-center mt-4 dark:text-ctp-text text-ctp-base dark:fill-ctp-text fill-ctp-base hover:text-ctp-green hover:fill-ctp-green typewriter-container"
			>
				<a
					class=" transition-colors duration-[0.5s] ease-in-out text-[1.3rem] inline-flex gap-3 hover:text-ctp-green hover:fill-ctp-green"
					href="/"
					><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"
						><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
						/></svg
					> Go back</a
				>
			</div>
		</div>
	</div>
</body>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@font-face {
		font-family: 'Fira Code';
		src: url('/FiraCode-Regular.woff2') format('woff2'),
			url('/FiraCode-Regular.woff') format('woff');
		font-weight: 400;
		font-style: normal;
		font-display: swap;
	}

	* {
		font-family: 'Fira Code', monospace, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
			Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	h1 {
		transition: font-size 0.7s ease-in-out, color 1s ease-in-out, background 1s ease-in-out;
	}

	.animating {
		@apply text-ctp-green bg-ctp-base rounded-[1rem];
	}

	.h1-container {
		height: 7rem; /* Set the desired height */
		overflow: hidden; /* Hide any overflow caused by growing text */
	}

	h1:hover {
		font-size: 3.5rem;
	}

	.typewriter-container {
		height: 7rem; /* Set the desired height */
		overflow: hidden; /* Hide any overflow caused by growing text */
	}

	.home-sweet-home {
		transition: color 0.5s ease-in-out;
	}

	.home-sweet-home:hover {
		@apply text-ctp-green;
	}
</style>
