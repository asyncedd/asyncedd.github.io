<script>
	import Themeswitch from './navbar/themeswitch.svelte';
	import Menu from './navbar/menu.svelte';
</script>

<nav
	class="w-[100%] bg-primary inline-flex overflow-visible fixed top-0 z-50 bg-opacity-80"
	style="backdrop-filter: saturate(180%) blur(20px);"
	id="menu-button"
>
	<a href="/" aria-label="async" class="mr-auto inline-flex justify-center mx-[3vw] my-1">
		<picture
			class="w-10 h-10 rounded-[100%] aspect-square mr-[10px] transition-transform duration-[1s] ease-in-out hover:scale-[1.2] rotate-[0deg] hover:rotate-[720deg]"
		>
			<source
				srcset="https://ik.imagekit.io/7qhojskvo/tr:w-100,lo-true,f-avif,r-256,q-85/clouds_tiny_2k_tiny.jpg?updatedAt=1692574417004"
				media="(max-width: 2.5rem)"
				type="image/avif"
				width="100"
				height="100"
			/>
			<source
				srcset="https://ik.imagekit.io/7qhojskvo/tr:w-100,cp-false,lo-true,f-webp,r-256,q-85/clouds_tiny_2k_tiny.jpg?updatedAt=1692574417004"
				width="100"
				height="100"
				media="(max-width: 2.5rem)"
				type="image/webp"
			/>
			<img
				src="https://ik.imagekit.io/7qhojskvo/tr:w-100,cp-false,lo-true,r-256,q-85/clouds_tiny_2k_tiny.jpg?updatedAt=1692574417004"
				width="100"
				height="100"
				alt=""
			/>
		</picture>
		<div class="head-parent px-1 flex transition-[transform] duration-[1s] ease-in-out">
			<p
				class="async ease-in-out cursor-pointer px-[2px] transition-[background] duration-[1s] text-[1.7rem] fonts-mono"
				style="-webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;"
			>
				async
			</p>
		</div>
	</a>
	<div class="flex items-center">
		<Themeswitch />
		<Menu />
		<div class="mr-[3vw]" />
	</div>
</nav>

<style lang="postcss" async>
	.async {
		background: linear-gradient(
				90deg,
				theme(colors.teal.300) 10%,
				theme(colors.sky.300) 20%,
				theme(colors.blue.300) 30%,
				theme(colors.indigo.300) 40%,
				theme(colors.violet.300) 50%,
				theme(colors.accent) 0%
			)
			calc(100% - var(--_p, 0%)) / 200% 100%;
	}

	.async:hover {
		--_p: 100%;
	}

	.head-parent:hover:not(:active) {
		--_p: 100%;
		transform: scale(1.1);
	}

	.head-parent:active {
		--_p: 100%;
		transform: scale(0.9);
	}
</style>
