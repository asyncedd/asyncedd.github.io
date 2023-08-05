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

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
	rel="stylesheet"
/>

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

			<div class="text-center mt-4 dark:text-ctp-text text-ctp-base typewriter-container">
				<a class=" home-sweet-home text-[1.3rem]" href="/"
					><i class="fa-solid fa-house" /> Go back</a
				>
			</div>
		</div>
	</div>
</body>

<style>
	div {
		font-family: JetBrains Mono, monospace;
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
