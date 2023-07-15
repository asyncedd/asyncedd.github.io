<script lang="ts">
	import Hackerman from '../components/hackerman.svelte';
	import Wave from '../components/wave.svelte';
	import Font from '../components/fonts.svelte';
	import Popup from '../components/popup.svelte';
	import Lorem from '../components/lorem.svelte';
	import Footer from '../components/footer.svelte';
	import Navbar from '../components/navbar.svelte';
	import Header from '../components/header.svelte';
	import DividersPacman from '../components/dividers/pacman.svelte';
	import { theme } from '../components/navbar.svelte';
</script>

<svelte:head>
	<title>async</title>
</svelte:head>

<Navbar />

<Popup />

<Font />

<Hackerman />

<body class="bg-ctp-base {$theme} scroll-smooth" style="overflow: hidden scroll;">
	<div class="bg-ctp-blue">
		<Header />
	</div>
	<Wave />
	<div class="p-[5rem]" />
	<div class="flex items-center justify-center">
		<div class="flex items-center justify-center p-[5rem] text-[5rem]">
			<h1 data-value="Skills" class="w-[20rem] text-center text-ctp-base">Skills</h1>
		</div>
	</div>
	<div class="flex justify-center p-[3rem]">
		<h1 data-value="Langs" class="m-8 w-[17rem] text-[5rem] text-ctp-base">Langs</h1>
		<h1 data-value="Tools" class="m-8 w-[17rem] text-[5rem] text-ctp-base">Tools</h1>
	</div>
	<DividersPacman />
	<div class="flex items-center justify-center p-[3rem]">
		<h1
			data-value="Lorem"
			class="m-8 w-[20rem] text-[5rem] text-ctp-base"
			style="white-space: nowrap;"
		>
			Lorem
		</h1>
	</div>
	<Lorem />
</body>

<Footer />

<style>
	/* jetbrains-mono-regular - latin */
	@font-face {
		font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
		font-family: 'JetBrains Mono';
		font-style: normal;
		font-weight: 400;
		src: url('/fonts/jetbrains-mono-v18-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}

	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	body {
		@apply m-[0rem] bg-ctp-base;
		font-family: 'JetBrains Mono', monospace;
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
	}

	h1 {
		@apply rounded-[10px] bg-ctp-blue text-center;
		transition: transform 500ms ease;
	}

	h1:hover {
		@apply bg-ctp-base text-ctp-green;
		transform: scale(1.1);
	}
</style>
