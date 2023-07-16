<script>
	import Description from '../components/description.svelte';
</script>

<div class="flex items-center justify-center">
	<img
		src="/moutains.webp"
		class="rotate max-w-48 aspect-square max-h-48 rounded-full text-center"
		loading="lazy"
		style="z-index: 999;"
		alt="async"
		decoding="async"
	/>
	<h1
		data-value="async"
		class="m-8 max-w-[35rem] text-center text-5xl antialiased sm:text-4xl md:text-6xl"
	>
		async
	</h1>
</div>
<div class="flex items-center justify-center">
	<Description />
</div>

<style>
	h1 {
		@apply rounded-[10px] bg-ctp-blue text-center;
		transition: transform 500ms ease;
		font-size: clamp(3rem, 8vw, 10rem); /* Adjust font size responsively */
	}

	h1:hover {
		@apply bg-ctp-base text-ctp-green;
		transform: scale(1.1);
	}

	.rotate {
		transition: transform 1s ease;
		transform: scale(1) rotate(360deg);
	}

	.rotate:hover {
		transform: scale(1.1) rotate(720deg);
	}
</style>
