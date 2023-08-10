<script lang="ts">
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';

	import '../app.postcss';
</script>

<body class="dark:bg-ctp-mantle bg-ctp-text text-ctp-base dark:text-ctp-text h-[100vh]">
	<Navbar />
	<main>
		<slot />
	</main>

	<Footer />
</body>

<style>
	@font-face {
		font-family: 'Fira Code';
		src: url('/FiraCode-Regular.woff2') format('woff2'),
			url('/FiraCode-Regular.woff') format('woff');
		font-weight: 400;
		font-style: normal;
		font-display: block;
	}

	* {
		font-family: monospace;
	}
</style>
