<script lang="ts">
	import Hackerman from '../components/hackerman.svelte';
	import Wave from '../components/wave.svelte';
	import Font from '../components/fonts.svelte';
	import Popup from '../components/popup.svelte';
	import Lorem from '../components/lorem.svelte';
	import Footer from '../components/footer.svelte';
	import Description from '../components/description.svelte';
	import Navbar from '../components/navbar.svelte';
</script>

<Navbar />

<Popup />

<Font />

<Hackerman />

<title> async </title>

<body class="light:bg-ctp-text dark:bg-ctp-base" style="overflow-x: hidden; overflow-y: scroll;">
	<div class="bg-ctp-blue">
		<div
			class="flex place-content-center items-center justify-center"
			style="vertical-align: baseline;"
		>
			<img
				src="/matej-rieciciar-SdDvoAvu384-unsplash.jpg"
				class="h-48 w-48 rounded-full text-center md:h-48 md:w-48"
				loading="lazy"
				style="z-index: 999; aspect-ratio: 1;"
				alt=""
				decoding="async"
			/>
			<h1
				data-value="async"
				class="m-8 w-[20rem] text-center text-[100px] text-ctp-base antialiased"
			>
				async
			</h1>
		</div>
		<div class="flex place-content-center items-center justify-center">
			<Description />
		</div>
	</div>
	<Wave />
	<div class="p-[5rem]" />
	<div class="flex place-content-center items-center justify-center">
		<div class="flex place-content-center items-center justify-center p-[5rem] text-[5rem]">
			<h1 data-value="Skills" class="w-[20rem] text-center text-ctp-base">Skills</h1>
		</div>
	</div>
	<div class="flex place-content-center p-[3rem]">
		<h1 data-value="Langs" class="m-8 w-[17rem] text-[5rem]">Langs</h1>
		<h1 data-value="Tools" class="m-8 w-[17rem] text-[5rem]">Tools</h1>
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
		src: url('fonts/jetbrains-mono-v18-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}

	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	body {
		@apply m-[0rem] grid;
		font-family: 'JetBrains Mono', monospace;
	}

	h1 {
		@apply scroll-smooth rounded-[10px] bg-ctp-blue text-center;
		transition: transform 500ms ease, background-color 500ms ease, color 500ms ease;
	}

	h1:hover {
		@apply bg-ctp-base text-ctp-green;
		transform: scale(1.1);
	}
</style>
