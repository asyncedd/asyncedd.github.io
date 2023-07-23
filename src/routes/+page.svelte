<script lang="ts">
	import Typewriter from '../components/typewriter.svelte';
	import Hackerman, { animating } from '../components/hackerman.svelte';
</script>

<Hackerman />

<body class="bg-ctp-base">
	<div class="flex justify-center bg-ctp-blue pt-[3rem] shrink-class">
		<div class="h1-container">
			<h1
				class="text-ctp-base text-center text-[3rem]"
				class:animating={$animating === true}
				data-value="async"
			>
				async
			</h1>
		</div>
	</div>
	<div class="pt-[1rem] bg-ctp-blue">
		<div class="diagonal flex justify-center">
			<div class="h1-container text-[1.3rem]">
				<Typewriter />
			</div>
		</div>
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
		transition: font-size 0.5s ease-in-out, color 1s ease-in-out;
	}

	h1:hover {
		@apply text-ctp-green text-[4rem];
	}

	.h1-container {
		height: 7rem; /* Set the desired height */
		overflow: hidden; /* Hide any overflow caused by growing text */
	}

	.animating {
		@apply text-ctp-green;
	}

	h1:hover + .shrink-class {
		@apply p-[1rem];
	}

	.blue-lavender-mix {
		background: color-mix(in srgb, #89b4fa, #1e1e2e 30%);
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
		transform: skewY(-3deg);
		@apply p-[7rem];
	}
</style>
