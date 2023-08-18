<script lang="ts" async>
	import { onMount } from 'svelte';
	import Typewriter from '../components/typewriter.svelte';
	import Wave from '../components/wave.svelte';
	let hanime = false;
	let anime = false;
	let Hackerman: any;

	onMount(async () => {
		if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
			hanime = true;
			await import('../components/hackerman.svelte').then((mod) => {
				Hackerman = mod.default;
				mod.animating.subscribe((v: any) => {
					anime = v;
				});
			});
		}

		const observer = new IntersectionObserver((entries) => {
			console.log(entries);
			entries.forEach((entry) => {
				entry.target.setAttribute('data-show', String(entry.isIntersecting));
			});
		});

		const hiddenElements = document.querySelectorAll('.scroll-animation');
		hiddenElements.forEach((el) => observer.observe(el));
	});
</script>

<div
	class="h-[100vh] flex justify-center items-center align-middle text-content pb-[5rem] sm:pb-0 bg-primary ease-in-out"
>
	<div class="flex flex-col justify-center items-center rounded-[3rem]">
		<div class="h-[20vh] w-auto overflow-none my-1 min-w-15">
			<h1
				class="text-center text-[5rem] sm:text-[7rem] px-3 inline-flex items-center justify-center hover:text-green-300 hover:scale-[1.2] {anime
					? 'text-green-300 bg-zinc-950'
					: ''} rounded-[1rem] font-mono motion-safe:duration-[0.5s] will-change-contents tracking-tighter"
				style="font-size: clamp(5rem, 0.5rem + 10vh, 7rem)"
				data-value="async"
			>
				async
			</h1>
			<div class="flex justify-center overflow-x-hidden text-[1.0rem] min-h-[2rem] my-[1rem]">
				<Typewriter
					sentences={[
						'GNU/Linux enjoyer',
						'Coding enthusiast',
						'Welcome to my website!',
						'WIP - as always'
					]}
				/>
			</div>
			<div class="flex justify-center items-center align-middle">
				<a href="https://discord.com/users/797422750321999943" aria-label="Discord">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="1em"
						viewBox="0 0 640 512"
						class=" hover:fill-[#6666ff] flex justify-center mt-[9px] mx-[10px] text-[1.7rem] origin-center hover:scale-[1.2] motion-safe:duration-[0.5s] fill-content"
						><path
							d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
						/></svg
					>
				</a>
				<a href="https://github.com/asyncedd" aria-label="Github">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="1em"
						viewBox="0 0 496 512"
						class="flex justify-center mt-[9px] mx-[10px] text-[1.7rem] origin-center hover:scale-[1.2] motion-safe:duration-[0.5s] fill-content hover hover:fill-[#6e5494]"
						><path
							d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
						/></svg
					>
				</a>
			</div>
		</div>
	</div>
	<div class="pb-[50vh]" />
</div>
<div style="transform: rotate(-180deg);">
	<Wave />
</div>
<div class="flex justify-center">
	<div
		class="py-[30vh] mx-[20vw]"
		style="transition-property: blur, opacity, transform, filter; transition-timing-function: ease-in-out;"
	>
		<div
			class="flex px-3 justify-center scroll-animation translate-x-[-100%] data-[show=true]:opacity-1 data-[show=true]:blur-0 data-[show=true]:translate-x-0 data-[show=false]:opacity-0 data-[show=false]:blur-[7px] data-[show=false]:duration-0 data-[show=true]:motion-safe:duration-[1.5s]"
			data-show="true"
		>
			<a href="#introduction">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="1em"
					viewBox="0 0 640 512"
					class="fill-content_dark flex"
					><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
						d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
					/></svg
				>
			</a>
			<h1 style="font-size: clamp(2.5rem, 0.5rem + 10vw, 6rem);" id="introduction">Introduction</h1>
		</div>
		<p
			class="py-[5vh] text-left leading-[1.5] tracking-wide text-[1.05rem] antialiased scroll-animation translate-x-[-100%] data-[show=true]:opacity-1 data-[show=true]:blur-0 data-[show=true]:translate-x-0 data-[show=false]:duration-0 data-[show=false]:opacity-0 data-[show=false]:blur-[7px] data-[show=true]:motion-safe:duration-[1s] first-letter:float-left first-letter:text-[5em] first-letter:tracking-[0.65] first-letter:mx-5 first-letter:leading-none"
			data-show="true"
		>
			Hey there! I'm
			<a href="https://github.com/asyncedd" class="after:content-['_↗'] text-accent hover:underline"
				>async</a
			>, a programming hobbiest (in general) and
			<a
				href="https://asyncedd.github.io/cinnamon-roll-recipe"
				class="after:content-['_↗'] text-accent hover:underline"
				>a professional cinnamon roll baker</a
			>. I've been learning to program since 2017 to create fun stuff but, here I am here creating
			pretty stuffs (I guess it is pretty fun :P). And of course, I'm on a mission to tell people
			how great Rick Astley is compared to the impostor from Among us or someone because it's quite
			obvious that he started the big bang w/ his 1B+ BANGER.
		</p>
		<div>
			<div class="justify-center flex">
				<div
					class="flex px-3 justify-center scroll-animation translate-x-[-100%] data-[show=true]:opacity-1 data-[show=true]:blur-0 data-[show=true]:translate-x-0 data-[show=false]:opacity-0 data-[show=false]:blur-[7px] data-[show=false]:duration-0 data-[show=true]:motion-safe:duration-[1.5s]"
					data-show="true"
				>
					<a href="#underdev"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							height="1em"
							viewBox="0 0 640 512"
							class="fill-content_dark flex"
							><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
								d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
							/></svg
						>
					</a>
				</div>
				<h1 style="font-size: clamp(2.5rem, 0.5rem + 10vw, 6rem);" id="underdev">
					Under development 🚧
				</h1>
			</div>
			<p
				class="py-[5vh] text-left leading-[1.5] tracking-wide text-[1.05rem] antialiased scroll-animation translate-x-[-100%] data-[show=true]:opacity-1 data-[show=true]:blur-0 data-[show=true]:translate-x-0 data-[show=false]:duration-0 data-[show=false]:opacity-0 data-[show=false]:blur-[7px] data-[show=true]:motion-safe:duration-[1s] first-letter:float-left first-letter:text-[5em] first-letter:tracking-[0.65] first-letter:mx-5 first-letter:leading-none"
				data-show="true"
			>
				This is under development! I'm working hard, ok? Please come back later
			</p>
		</div>
	</div>
</div>

{#if hanime}
	<svelte:component this={Hackerman} />
{/if}
