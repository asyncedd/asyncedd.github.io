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
