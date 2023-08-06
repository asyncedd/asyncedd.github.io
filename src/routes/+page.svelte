<script lang="ts" async>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	let anime = false;

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

	onMount(() => {
		anime = true;
	});
</script>

<body class="dark:bg-ctp-mantle bg-ctp-text" style="font-display: swap;">
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
						{#if anime}
							<h1
								in:fly={{
									y: 100,
									delay: 300,
									easing: backOut
								}}
								class="text-center text-[7rem] p-1 px-3"
								class:animating={$animating === true}
								data-value="async"
							>
								async
							</h1>
						{/if}
						{#if !anime}
							<h1 class="text-center text-[7rem] p-1 px-3 opacity-0" data-value="async">async</h1>
						{/if}
					</div>
					<div class="pt-[0.1rem] flex justify-center h1-container text-[1.0rem]">
						<Typewriter sentences={externalSentences} />
					</div>
				</div>
				<div class="mx-1" />
				<picture>
					<img
						src="https://ik.imagekit.io/dfijmneb9/clouds.webp?updatedAt=1691272771794"
						alt="Mountains"
						class="h-[13rem] rounded-[100%] aspect-square rotate items-center justify-center sm:order-last mx-[1rem] my-3 overflow-hidden"
						loading="eager"
						decoding="async"
						srcset="
            https://ik.imagekit.io/dfijmneb9/tr:w-128/clouds.webp?updatedAt=1691272771794 128w
            https://ik.imagekit.io/dfijmneb9/tr:w-256/clouds.webp?updatedAt=1691272771794 256w
            https://ik.imagekit.io/dfijmneb9/tr:w-512/clouds.webp?updatedAt=1691272771794 512w
            https://ik.imagekit.io/dfijmneb9/tr:w-1024/clouds.webp?updatedAt=1691272771794 1024w
            "
					/>
				</picture>
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
		<footer class="dark:bg-ctp-base bg-ctp-blue text-center">
			<h2 class="text-center text-[1rem] p-[1rem]">Made with ❤️ by asyncedd</h2>
			<p class="text-center text-[0.9rem] p-[0.3rem]">
				The main image is shot by <a
					class="text-ctp-blue hover:text-ctp-sky transition-colors duration-150"
					href="https://unsplash.com/@romello?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
					>Romello Williams</a
				>
				on
				<a
					class="text-ctp-blue hover:text-ctp-sky transition-colors duration-150"
					href="https://unsplash.com/photos/P8VMwYFY-Es?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
					>Unsplash</a
				>
			</p>
		</footer>
	</div>
</body>

<Hackerman />

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/firacode/6.2.0/fira_code.min.css"
/>

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
		transform: scale(1);
	}

	.rotate:hover {
		transform: scale(1.1);
	}
</style>
