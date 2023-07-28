<script lang="ts">
	import Typewriter from '../components/typewriter.svelte';
	import Hackerman, { animating } from '../components/hackerman.svelte';
	import Fontawesome from '../components/fontawesome.svelte';
	import Navbar from '../components/navbar.svelte';

	let externalSentences = [
		'GNU/Linux enjoyer',
		'Coding enthusiast',
		'Svelte fan',
		'Welcome to my website!'
	];
</script>

<Fontawesome />

<Hackerman />

<body class="bg-ctp-base">
	<div class="bg-ctp-blue">
		<Navbar />
	</div>
	<div class="flex justify-center bg-ctp-blue pt-[10vh]">
		<div class="h-[20vh] overflow-none">
			<div class="inline-flex mx-[3vw]">
				<img src="moutains.webp" alt="" class="h-[15vh] rounded-[100%] aspect-square rotate" />
				<h1
					class="text-ctp-base text-center text-[5vh] ml-4 p-[3vh]"
					class:animating={$animating === true}
					data-value="async"
				>
					async
				</h1>
			</div>
		</div>
	</div>
	<div class="pt-[1rem] bg-ctp-blue">
		<div class="diagonal flex justify-center">
			<div class="h1-container text-[1.3rem] text-ctp-base">
				<Typewriter sentences={externalSentences} />
			</div>
		</div>
	</div>
	<div class="p-[25rem] text-center px-[10vw] text-ctp-text">
		<i>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</i>
	</div>
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
		@apply text-ctp-green text-[8vh];
	}

	.h1-container {
		height: 7rem; /* Set the desired height */
		overflow: hidden; /* Hide any overflow caused by growing text */
	}

	.animating {
		@apply text-ctp-green bg-ctp-base;
	}

	.diagonal {
		position: relative;
		isolation: isolate;
	}

	.diagonal::after {
		content: '';
		background-image: linear-gradient(180deg, #89b4fa 80%, #1e1e2e);
		position: absolute;
		z-index: -1;
		inset: 0;
		transform: skewY(-5deg);
		@apply p-[7rem];
	}

	.rotate {
		transition: transform 1s ease;
		transform: scale(1) rotate(360deg);
	}

	.rotate:hover {
		transform: scale(1.1) rotate(720deg);
	}
</style>
