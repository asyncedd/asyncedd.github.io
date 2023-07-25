<script>
	import { page } from '$app/stores';
	import Hackerman, { animating } from '../components/hackerman.svelte';
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
	rel="stylesheet"
/>

<Hackerman />

<div class="bg-ctp-base items-center min-h-screen flex justify-center">
	<div class="text-ctp-text text-[3rem] flex justify-center">
		<h1 class:animating={$animating === true} data-value="{$page.status}| {$page.error.message}">
			{$page.status}| {$page.error.message}
		</h1>
	</div>
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	div {
		font-family: JetBrains Mono;
	}

	h1 {
		transition: font-size 0.7s ease-in-out, color 1s ease-in-out, background 1s ease-in-out;
	}

	.animating {
		@apply text-ctp-green bg-ctp-base;
	}
</style>
