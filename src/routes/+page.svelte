<script lang="ts" async>
	import { Image } from '@unpic/svelte';

	import Typewriter from '../components/typewriter.svelte';
	import Hackerman, { animating } from '../components/hackerman.svelte';
	import Navbar from '../components/navbar.svelte';
	import Wave from '../components/wave.svelte';

	let externalSentences = [
		'GNU/Linux enjoyer',
		'Coding enthusiast',
		'Svelte fan',
		'Welcome to my website!'
	];
</script>

<body class="dark:bg-ctp-mantle bg-ctp-text">
	<div class="dark:bg-ctp-base bg-ctp-blue">
		<Navbar />
		<div
			class="h-[100vh] py-[10vh] flex align-middle justify-center items-center dark:text-ctp-text text-ctp-base"
		>
			<div
				class="flex flex-col sm:flex-row dark:bg-ctp-base bg-ctp-blue justify-center items-center sm:items-start rounded-[3rem]"
			>
				<div class="order-last sm:order-first h-[20vh] w-auto overflow-none my-1 min-w-15">
					<div class="inline-flex items-center justify-center">
						<h1
							class="text-center text-[7rem] p-1 px-3"
							class:animating={$animating === true}
							data-value="async"
						>
							async
						</h1>
					</div>
					<div class="pt-[0.1rem] flex justify-center h1-container text-[1.0rem]">
						<Typewriter sentences={externalSentences} />
					</div>
				</div>
				<div class="mx-1" />
				<Image
					src="https://raw.githubusercontent.com/asyncedd/asyncedd.github.io/master/static/moutain.webp"
					alt="Mountains"
					class="h-[13rem] rounded-[100%] aspect-square rotate items-center justify-center sm:order-last px-[1rem] py-3 overflow-hidden"
					loading="eager"
					decoding="async"
				/>
			</div>
			<div class="pb-[50vh]" />
		</div>
		<div class="pb-[5rem] sm:pb-0" />
	</div>
	<div style="transform: rotate(-180deg);">
		<Wave />
	</div>
	<div class="text-ctp-base dark:text-ctp-text">
		<div class="py-[30vh] text-center px-[10vw]">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</div>
		<Wave />
		<footer class="dark:bg-ctp-base bg-ctp-blue">
			<h2 class="text-center text-[1rem] p-[1rem]">Made with ❤️ by asyncedd</h2>
		</footer>
	</div>
</body>

<Hackerman />

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Preload the font resources -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet" />

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	* {
		font-family: 'Fira Code', monopsace;
		overflow: none visible;
	}

	h1 {
		border-radius: 1rem;
		transition: font-size 0.7s ease-in-out, color 1s ease-in-out, background 1s ease-in-out;
	}

	h1:hover {
		@apply text-ctp-green text-[7.5rem];
	}

	.h1-container {
		height: 5rem; /* Set the desired height */
		overflow: hidden; /* Hide any overflow caused by growing text */
	}

	.animating {
		@apply text-ctp-green bg-ctp-mantle;
	}

	.rotate {
		transition: transform 1s ease;
		transform: scale(1) rotate(360deg);
	}

	.rotate:hover {
		transform: scale(1.1) rotate(720deg);
	}
</style>
