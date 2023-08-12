<script lang="ts">
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
	import PageTransition from './transition.svelte';

	export let data;
	import '../app.postcss';
</script>

<body class="bg-primary_dark text-content min-h-[100vh]">
	<Navbar />
	<main>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>

	<Footer />
</body>

<style>
	@font-face {
		font-family: 'Manrope';
		src: url('/fonts/manrope/subset-Manrope-Regular.woff2') format('woff2'),
			url('/fonts/manrope/subset-Manrope-Regular.woff') format('woff');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'Manrope';
		src: url('/fonts/manrope/subset-Manrope-Bold.woff2') format('woff2'),
			url('/fonts/manrope/subset-Manrope-Bold.woff') format('woff');
		font-weight: bold;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'Fira Code';
		src: url('/fonts/FiraCode/subset-FiraCode-Bold.woff2') format('woff2'),
			url('/fonts/FiraCode/subset-FiraCode-Bold.woff') format('woff');
		font-weight: bold;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'Fira Code';
		src: url('/fonts/FiraCode/subset-FiraCode-Regular.woff2') format('woff2'),
			url('/fonts/FiraCode/subset-FiraCode-Regular.woff') format('woff');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}
</style>
