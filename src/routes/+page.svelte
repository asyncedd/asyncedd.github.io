<script lang="ts">
	import Typewriter from '../components/typewriter.svelte';
	import Hackerman, { animating } from '../components/hackerman.svelte';
	import Fontawesome from '../components/fontawesome.svelte';
	import Navbar from '../components/navbar.svelte';
	import Wave from '../components/wave.svelte';

	let externalSentences = [
		'GNU/Linux enjoyer',
		'Coding enthusiast',
		'Svelte fan',
		'Welcome to my website!'
	];
</script>

<Fontawesome />

<Hackerman />

<body class="dark:bg-ctp-mantle bg-ctp-text">
	<div class="dark:bg-ctp-base bg-ctp-blue">
		<Navbar />
	</div>
	<div class="py-[30vh] sm:py-[40vh] dark:bg-ctp-base bg-ctp-blue items-center content-center">
		<div
			class="flex flex-col sm:flex-row dark:bg-ctp-base bg-ctp-blue mx-[3vw] space-x-4 justify-center items-center sm:items-start"
		>
			<div class="order-last sm:order-first h-[20vh] w-full sm:w-auto overflow-none">
				<div class="min-w-[15vw]">
					<div class="inline-flex items-center justify-center h-full w-full pt-[3vh] sm:pt-0">
						<h1
							class="dark:text-ctp-text text-ctp-base text-center text-[5rem] px-4"
							class:animating={$animating === true}
							data-value="async"
						>
							async
						</h1>
					</div>
					<div class="pt-[1rem] dark:bg-ctp-base bg-ctp-blue">
						<div class="flex justify-center">
							<div class="h1-container text-[1.3rem] text-ctp-base dark:text-ctp-text">
								<Typewriter sentences={externalSentences} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="items-center justify-center h-[20vh] sm:order-last">
				<img src="moutains.webp" alt="" class="h-full rounded-[100%] aspect-square rotate" />
			</div>
		</div>
		<div class="pb-[13vh]" />
	</div>
	<div style="transform: rotate(-180deg);">
		<Wave />
	</div>
	<div class="p-[30vh] text-center px-[10vw] dark:text-ctp-text text-ctp-base">
		<i>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</i>
	</div>
	<Wave />
	<footer class="dark:bg-ctp-base bg-ctp-blue">
		<h2 class="text-center text-ctp-base dark:text-ctp-text text-[1rem] p-[1rem]">
			Made with ❤️ by asyncedd
		</h2>
	</footer>
</body>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" rossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
	rel="stylesheet"
/>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	* {
		font-family: JetBrains Mono;
		overflow: none visible;
	}

	h1 {
		border-radius: 1rem;
		transition: font-size 0.7s ease-in-out, color 1s ease-in-out, background 1s ease-in-out;
	}

	h1:hover {
		@apply text-ctp-green text-[6rem];
	}

	.h1-container {
		height: 7rem; /* Set the desired height */
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
