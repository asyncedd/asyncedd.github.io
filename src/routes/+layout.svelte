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
