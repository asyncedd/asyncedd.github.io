<script>
	import Description from '../components/description.svelte';
</script>

<div class="flex items-center justify-center" style="vertical-align: baseline;">
	<img
		src="/moutains.webp"
		class="rotate h-48 w-48 rounded-full text-center md:h-48 md:w-48"
		loading="lazy"
		style="z-index: 999; aspect-ratio: 1;"
		alt=""
		decoding="async"
	/>
	<h1 data-value="async" class="m-8 w-[20rem] text-center text-[100px] text-ctp-base antialiased">
		async
	</h1>
</div>
<div class="flex items-center justify-center">
	<Description />
</div>

<style>
	h1 {
		@apply rounded-[10px] bg-ctp-blue text-center;
		transition: transform 500ms ease, background-color 500ms ease, color 500ms ease;
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

	.rotate:not(:hover) {
		transition: transform 1s ease;
		transform: scale(1) rotate(360deg);
	}
</style>
