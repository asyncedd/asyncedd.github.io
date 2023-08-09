<script lang="ts">
	import ThemeSwitch from '../lib/ThemeSwitch.svelte';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
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
					<a
						class="text-[1.7rem] async tracking-widest cursor-pointer px-[2px] transition duration-[0.5s]"
						href="/">async</a
					>
				</div>
			</div>
		</a>
	</div>
	<div class="flex gap-[20px]">
		<div class="flex">
			<div class="text-[30px] flex justify-center mx-[40px] mt-[10px]">
				<ThemeSwitch />
			</div>
		</div>
		<button
			class="flex flex-col cursor-pointer mt-[7px]"
			tabindex="0"
			aria-label="Toggle hamburger menu"
			class:menu-open={isMenuOpen}
			on:click={toggleMenu}
			on:keydown={toggleMenu}
		>
			<span class="bar dark:bg-ctp-text bg-ctp-base" />
			<span class="bar dark:bg-ctp-text bg-ctp-base" />
			<span class="bar dark:bg-ctp-text bg-ctp-base" />
		</button>
		<div class="mr-[4vw]" />
	</div>
</div>
<div class="flex">
	<div class="menu-overlay" class:visible={isMenuOpen}>
		<div
			class="menu dark:bg-ctp-base bg-ctp-blue dark:text-ctp-text text-ctp-base text-[2rem] {isMenuOpen
				? 'w-[100%]'
				: 'w-[50%]'}"
		>
			<ul>
				<div class="h-[50vh] flex flex-col items-center justify-center py-[50vh]">
					<li class="">
						<a
							href="/"
							class="flex gap-3 dark:fill-ctp-text fill-ctp-base hover:fill-ctp-yellow hover:dark:fill-ctp-sky hover:text-ctp-yellow hover:dark:text-ctp-sky transition-colors duration-[0.5s]"
							><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"
								><path
									d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
								/></svg
							> Home</a
						>
					</li>
					<li>
						<a
							href="https://github.com/asyncedd/asyncedd.github.io"
							class="flex gap-3 dark:fill-ctp-text fill-ctp-base hover:fill-[#fafafa] hover:dark:fill-[#6e5494] hover:text-[#fafafa] hover:dark:text-[#6e5494] transition-colors duration-[0.5s]"
							><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"
								><path
									d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
								/></svg
							> Repository</a
						>
					</li>
					<li>
						<a
							href="https://discord.com/users/797422750321999943"
							class="flex gap-3 dark:fill-ctp-text fill-ctp-base hover:fill-[#6666ff] hover:dark:fill-[#6666ff] hover:text-[#6666ff] hover:dark:text-[#6666ff] transition-colors duration-[0.5s]"
							><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"
								><path
									d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
								/></svg
							> Contact</a
						>
					</li>
				</div>
			</ul>
		</div>
	</div>
</div>

<style>
	.navbar {
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
		transform: rotate(360deg);
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

	.bar {
		width: 30px;
		height: 3px;
		margin: 4px 0;
		box-shadow: 0 2px 4px transparent;
		transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
	}

	/* Animation for the hamburger menu */
	.menu-open .bar:nth-child(1) {
		transform: translateY(10px) rotate(45deg);
	}

	.menu-open .bar:nth-child(2) {
		transform: translateX(10vw);
	}

	.menu-open .bar:nth-child(3) {
		transform: translateY(-10px) rotate(-45deg);
	}

	.menu-overlay {
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 49; /* Make sure it's below the navbar (z-index: 50) */
		visibility: hidden;
		opacity: 0;
		transition: visibility 0s 0.3s ease-in-out, opacity 0.3s ease-in-out; /* Delay visibility change after opacity */
	}

	.visible {
		visibility: visible;
		opacity: 1;
	}

	/* Adjust the menu position and size as needed */
	.menu {
		height: 100%;
		transition: width 0.5s ease-in-out;
	}
</style>
