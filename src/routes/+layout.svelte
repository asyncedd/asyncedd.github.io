<script>
	import '../app.postcss';

	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	import PageTransition from './transition.svelte';

	export let data;
</script>

<body class="font-sans text-[1rem] bg-background text-foreground">
	<div class="min-h-[100svh] max-w-[100svw]">
		<div class="mb-[2.5rem]">
			<Header />
		</div>
		<div class="p-[2.5rem]">
			<main>
				<PageTransition url={data.url}>
					<slot />
				</PageTransition>
			</main>
		</div>
	</div>
	<Footer />
</body>
