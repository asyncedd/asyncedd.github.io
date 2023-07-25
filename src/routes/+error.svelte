<script>
	import { page } from '$app/stores';
	import Hackerman, { animating } from '../components/hackerman.svelte'; // If you're using the Hackerman component
	import Navbar from '../components/navbar.svelte';
	import Fontawesome from '../components/fontawesome.svelte';
	import Typewriter from '../components/typewriter.svelte';

	let p = ["This isn't the site you're looking for."];
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
	rel="stylesheet"
/>

<Hackerman />

<Fontawesome />

<body class="bg-ctp-base">
	<Navbar />
	<div class="flex justify-center items-center min-h-screen">
		<div>
			<div class="h1-container">
				<div class="text-ctp-text text-[3rem] flex justify-center">
					<h1
						class:animating={$animating === true}
						data-value="{$page.status}| {$page.error.message}"
					>
						{$page.status}| {$page.error.message}
					</h1>
				</div>
			</div>
			<div class="text-center mt-4 text-ctp-text">
				<Typewriter sentences={p} />
			</div>
		</div>
	</div>
</body>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	div {
		font-family: JetBrains Mono, monospace;
	}

	h1 {
		transition: font-size 0.7s ease-in-out, color 1s ease-in-out, background 1s ease-in-out;
	}

	.animating {
		@apply text-ctp-green bg-ctp-base;
	}

	.h1-container {
		height: 7rem; /* Set the desired height */
		overflow: hidden; /* Hide any overflow caused by growing text */
	}
</style>
