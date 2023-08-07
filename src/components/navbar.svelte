<script lang="ts">
	import ThemeSwitch from '../lib/ThemeSwitch.svelte';
</script>

<div class="w-[100%] dark:bg-ctp-base bg-ctp-blue overflow-auto navbar flex top-0 z-50">
	<div class="left-content inline-flex justify-center mx-[3vw] my-1">
		<a href="/" aria-label="HP">
			<div class="left-content inline-flex justify-center">
				<img
					src="https://ik.imagekit.io/dfijmneb9/tr:w-100/clouds.webp?updatedAt=1691272771794"
					alt=""
					class="w-10 h-10 rounded-[100%] aspect-square rotate"
				/>
				<div class="head-parent px-1 items-center">
					<a class="text-[1.5rem] async" href="/">async</a>
				</div>
			</div>
		</a>
	</div>
	<div class="flex">
		<div class="text-[30px] a-icons icon-wrapper mx-[40px] mt-[10px]">
			<ThemeSwitch />
		</div>
	</div>
	<div class="mr-[2vw]" />
</div>

<style>
	.navbar {
		@apply bg-opacity-80;
		backdrop-filter: blur(20px);
		display: inline-flex;
		overflow: hidden;
		position: fixed;
		top: 0;
		z-index: 50; /* Add a z-index to ensure the navbar stays on top of other elements */
	}

	/* Content on the left */
	.left-content {
		margin-right: auto; /* Pushes the content to the left side */
	}

	.left-content img {
		margin-right: 10px; /* Add some space between the image and the right content */
		transition: transform 0.3s ease-in-out; /* Add a transition for smooth animation */
	}

	/* Center the icons */
	.a-icons,
	.icon-wrapper {
		display: flex;
		justify-content: center;
	}

	/* Hover effect for icons and images */
	.left-content img:hover {
		/* Apply the effect to the image when it's hovered */
		transform: scale(1.2); /* Increase the scale on hover */
	}

	/* Add responsiveness - will automatically display the navbar vertically instead of horizontally on screens less than 500 pixels */
	@media screen and (max-width: 500px) {
		.navbar a {
			float: none;
			display: block;
		}
	}

	.rotate {
		transition: transform 5s ease;
		transform: scale(1) rotate(360deg);
	}

	.rotate:hover {
		transform: scale(1.1) rotate(720deg);
	}

	.async {
		--s: 0.1em;
		background: linear-gradient(
				90deg,
				hsl(170, 57%, 73%) 10%,
				hsl(189, 71%, 73%) 20%,
				hsl(199, 76%, 69%) 30%,
				hsl(217, 92%, 76%) 40%,
				hsl(232, 97%, 85%) 50%,
				hsl(240, 21%, 15%) 0%
			)
			calc(100% - var(--_p, 0%)) / 200% 100%;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		transition: 0.5s;
		cursor: pointer;
		padding-left: 2px;
		padding-right: 2px;
	}

	:global(.dark) .async {
		--s: 0.1em;
		background: linear-gradient(
				90deg,
				hsl(170, 57%, 73%) 10%,
				hsl(189, 71%, 73%) 20%,
				hsl(199, 76%, 69%) 30%,
				hsl(217, 92%, 76%) 40%,
				hsl(232, 97%, 85%) 50%,
				hsl(189, 71%, 73%) 0%
			)
			calc(100% - var(--_p, 0%)) / 200% 100%;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		transition: 0.5s;
		cursor: pointer;
		padding-left: 2px;
		padding-right: 2px;
	}

	.async:hover {
		--_p: 100%;
	}

	.head-parent {
		transition: background 0.3s ease-in-out, transform 0.3s ease-in-out;
		@apply rounded-[0.7rem];
	}

	.head-parent:hover {
		@apply bg-ctp-mantle;
		--_p: 100%;
		transform: scale(1.1);
	}
</style>
