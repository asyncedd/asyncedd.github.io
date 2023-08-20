<script>
	let hanime = false;
	/**
	 * variable for the hackerman component
	 * @type {any}
	 */
	let Hackerman;
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Wave from '$lib/components/wave.svelte';
	import Typewriter from '$lib/components/typewriter.svelte';

	onMount(async () => {
		if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
			hanime = true;
			await import('$lib/components/hackerman.svelte').then((mod) => {
				Hackerman = mod.default;
			});
		}

		const observer = new IntersectionObserver((entries) => {
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
	<div class="flex items-center">
		<div class="py-[10vh]" style="max-inline-size: 100%; margin-inline: auto;">
			<h1
				class="text-center px-3 hover:text-green-300 hover:scale-[1.2] data-[animating=true]:text-green-300 data-[animating=true]:bg-zinc-950 rounded-[1rem] font-mono motion-safe:duration-[0.5s] tracking-tighter"
				style="font-size: clamp(1rem, 1rem + 10vh, 7rem)"
				data-value="{$page.status} | {$page.error.message}"
			>
				{$page.status} | {$page.error.message}
			</h1>
			<div class="flex justify-center overflow-x-hidden text-[1.0rem] min-h-[2rem] my-[2rem]">
				<Typewriter
					sentences={[
						"Hmm... this page isn't what you're looking for.",
						'I recomend you going back home.',
						'Double check the URL',
						'If you are 100% sure that this exist, open an issue on GitHub!!'
					]}
				/>
			</div>
			<div class="flex justify-center text-[3rem]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="1em"
					viewBox="0 0 576 512"
					class="fill-content hover:fill-accent transition-[fill] duration-[0.5s] ease-in-out"
					><path
						d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
					/></svg
				>
			</div>
		</div>
	</div>
</div>
<div class="rotate-[-180deg]">
	<Wave />
</div>

{#if hanime}
	<svelte:component this={Hackerman} />
{/if}
