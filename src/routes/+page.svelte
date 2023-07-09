<script lang="ts">
	import Hackerman from '../components/hackerman.svelte';
	import Wave from '../components/wave.svelte';
	import Font from '../components/fonts.svelte';
	import Popup from '../components/popup.svelte';
	import Lorem from '../components/lorem.svelte';
  import Footer from '../components/footer.svelte';
</script>

<Popup />

<Font />

<Hackerman />

<body class="dark:bg-ctp-base light:bg-ctp-text">
	<div class="bg-ctp-blue">
		<div
			class="place-content-center flex justify-center items-center"
			style="vertical-align: baseline;"
		>
			<img
				src="/matej-rieciciar-SdDvoAvu384-unsplash.jpg"
				class="md:w-48 md:h-48 rounded-full text-center"
				style="z-index: 9999;"
				alt=""
				width="384"
				height="384"
			/>
			<h1
				data-value="async"
				class="m-8 text-center text-[100px] antialiased text-ctp-base w-[20rem]"
			>
				async
			</h1>
		</div>
		<div class="container">
			<h1
				data-value="HI"
				class="m-8 text-center text-[100px] antialiased text-ctp-base w-[10rem] HI"
			>
				HI
			</h1>
		</div>
	</div>
	<Wave />
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
		@apply grid m-[0rem];
		font-family: 'JetBrains Mono', monospace;
	}

	.container {
		@apply flex justify-center items-center text-center ml-[50%];
		transform: translateX(-50%);
	}

	h1 {
		@apply text-center scroll-smooth bg-ctp-blue rounded-[10px];
		transition: transform 500ms ease, background-color 500ms ease, color 500ms ease;
	}

	h1:hover {
		@apply bg-ctp-base text-ctp-green;
		transform: scale(1.1);
	}
</style>
