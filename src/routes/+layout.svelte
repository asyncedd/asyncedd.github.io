<script lang="ts">
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
	import PageTransition from './transition.svelte';

	export let data;
	import '../app.postcss';

	console.log('%casyncedd', 'color: #22c55e; font-size: 10rem;');
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
