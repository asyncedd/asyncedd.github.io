<script lang="ts">
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
	import PageTransition from './transition.svelte';

	export let data;
	import '../app.postcss';
</script>

<body class="dark:bg-zinc-950 bg-zinc-50 text-zinc-900 dark:text-zinc-50 h-[100vh]">
	<Navbar />
	<main>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>

	<Footer />
</body>
