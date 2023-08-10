<script lang="ts">
	import { afterUpdate } from 'svelte';
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
	import PageTransition from './transition.svelte';
	import { Breadcrumbs } from 'attractions';

	export let data;
	import '../app.postcss';

	function transformUrl() {
		const segments = data.url.split('/');
		const transformedItems = [];

		let accumulatedPath = '';

		segments.forEach((segment, index) => {
			accumulatedPath += `/${segment}`;
			const text =
				segment === '' && index === 0 ? 'Home' : segment.charAt(0).toUpperCase() + segment.slice(1);
			transformedItems.push({ href: accumulatedPath.replace(/\/\//g, '/'), text });
		});

		return transformedItems;
	}

	let items = transformUrl();

	afterUpdate(() => {
		items = transformUrl();
	});
</script>

<body class="dark:bg-ctp-mantle bg-white text-ctp-base dark:text-ctp-text h-[100vh] flex flex-col">
	<Navbar />
	<div class="dark:bg-ctp-base bg-ctp-blue mt-[3rem]">
		<Breadcrumbs {items} />
	</div>
	<main>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>

	<Footer />
</body>
