<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import PageTransition from './transition.svelte';

	export let data;
	import '../app.postcss';

	console.log('%casyncedd', 'color: #22c55e; font-size: 10rem;');
</script>

<body class="bg-background_dark text-foreground min-h-[100vh]">
	<Navbar />
	<main>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>

	<Footer />
</body>
