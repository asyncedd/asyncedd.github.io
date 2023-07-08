<script lang="ts">
	import Hackerman from '../components/hackerman.svelte';
	import Wave from '../components/wave.svelte';
	import Font from '../components/fonts.svelte';
	import Popup from '../components/popup.svelte';
	import Lorem from '../components/lorem.svelte';
</script>

<Popup />

<Font />

<Hackerman />

<body class="dark:bg-ctp-base light:bg-ctp-text">
	<div class="bg-ctp-blue">
		<img
			src="/matej-rieciciar-SdDvoAvu384-unsplash.jpg"
			class="w-24 h-24 md:w-48 md:h-48 rounded-full m-8 flex place-content-center mx-auto text-center"
			style="z-index: 9999;"
			alt=""
			width="384"
			height="384"
		/>
		<div class="container">
			<h1 data-value="HI" class="m-8 w-10 text-center text-[100px] antialiased text-ctp-base">
				HI
			</h1>
		</div>
	</div>
	<Wave />
	<Lorem />
</body>

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
		@apply text-center w-[150px] scroll-smooth bg-ctp-blue;
	}

	h1:hover {
		@apply bg-ctp-base text-ctp-blue rounded-[10px];
	}
</style>
