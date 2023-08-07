<script lang="ts" async>
	import Typewriter from '../components/typewriter.svelte';
	import Hackerman, { animating } from '../components/hackerman.svelte';
	import Navbar from '../components/navbar.svelte';
	import Wave from '../components/wave.svelte';

	let externalSentences = [
		'GNU/Linux enjoyer',
		'Coding enthusiast',
		'Svelte fan',
		'Welcome to my website!'
	];
</script>

<body
	class="dark:bg-ctp-mantle bg-ctp-text overflow-x-hidden overflow-y-visible"
	style="font-display: swap;"
>
	<div class="dark:bg-ctp-base bg-ctp-blue">
		<Navbar />
		<div class="h-[100vh] flex justify-center py-[35vh] dark:text-ctp-text text-ctp-base">
			<div
				class="flex flex-col sm:flex-row dark:bg-ctp-base bg-ctp-blue justify-center items-center sm:items-start rounded-[3rem]"
			>
				<div class="order-last sm:order-first h-[20vh] w-auto overflow-none my-1 min-w-15">
					<h1
						class="text-center text-[7rem] p-1 px-3 inline-flex items-center justify-center"
						class:animating={$animating === true}
						data-value="async"
					>
						async
					</h1>
					<div class="flex justify-center overflow-x-hidden text-[1.0rem] min-h-[2rem] my-[1rem]">
						<Typewriter sentences={externalSentences} />
					</div>
					<div class="inline-flex justify-center items-center align-middle mx-[35%]">
						<a
							href="https://discord.com/users/797422750321999943"
							class="text-center dark:text-ctp-text text-ctp-base icon-wrapper a-icons discord hover:fill-[#6666ff] dark:fill-ctp-text fill-ctp-base hover:dark:fill-[#6666ff]"
							aria-label="Discord"
						>
							<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"
								><path
									d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
								/></svg
							>
						</a>
						<a
							href="https://github.com/asyncedd"
							class="dark:text-ctp-text text-ctp-base icon-wrapper a-icons github dark:fill-ctp-text hover:fill-[#fafafa] fill-ctp-base hover:dark:fill-[#6e5494]"
							aria-label="Github"
						>
							<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"
								><path
									d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
								/></svg
							>
						</a>
					</div>
				</div>
				<div class="mx-1" />
				<picture>
					<img
						src="https://ik.imagekit.io/dfijmneb9/clouds.webp?updatedAt=1691272771794"
						alt="Mountains"
						class="h-[13rem] rounded-[100%] aspect-square rotate items-center justify-center sm:order-last mx-[1rem] my-3 overflow-hidden"
						loading="eager"
						decoding="async"
						srcset="
            https://ik.imagekit.io/dfijmneb9/tr:w-128/clouds.webp?updatedAt=1691272771794 128w
            https://ik.imagekit.io/dfijmneb9/tr:w-256/clouds.webp?updatedAt=1691272771794 256w
            https://ik.imagekit.io/dfijmneb9/tr:w-512/clouds.webp?updatedAt=1691272771794 512w
            https://ik.imagekit.io/dfijmneb9/tr:w-1024/clouds.webp?updatedAt=1691272771794 1024w
            "
					/>
				</picture>
			</div>
			<div class="pb-[50vh]" />
		</div>
		<div class="pb-[5rem] sm:pb-0" />
	</div>
	<div style="transform: rotate(-180deg);">
		<Wave />
	</div>
	<div class="text-ctp-base dark:text-ctp-text">
		<div class="py-[30vh] text-center px-[10vw]">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</div>
		<Wave />
		<footer class="dark:bg-ctp-base bg-ctp-blue text-center">
			<h2 class="text-center text-[1rem] p-[1rem]">Made with ❤️ by asyncedd</h2>
			<p class="text-center text-[0.9rem] p-[0.3rem]">
				The main image is shot by <a
					class="dark:text-ctp-blue text-ctp-rosewater hover:text-ctp-sky hover:dark:text-ctp-sky transition-colors duration-150"
					href="https://unsplash.com/@romello?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
					>Romello Williams</a
				>
				on
				<a
					class="dark:text-ctp-blue text-ctp-rosewater hover:text-ctp-sky hover:dark:text-ctp-sky transition-colors duration-150"
					href="https://unsplash.com/photos/P8VMwYFY-Es?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
					>Unsplash</a
				>
			</p>
		</footer>
	</div>
</body>

<Hackerman />

<link rel="dns-preconnect" href="https://cdnjs.cloudflare.com" />
<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/firacode/6.2.0/fira_code.min.css"
/>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	* {
		font-family: 'Fira Code', monospace;
		overflow: none visible;
	}

	h1 {
		border-radius: 1rem;
		transition: font-size 0.7s ease-in-out, color 1s ease-in-out, background 1s ease-in-out;
	}

	h1:hover {
		@apply text-ctp-green text-[7.5rem];
	}

	.animating {
		@apply text-ctp-green bg-ctp-mantle;
	}

	.rotate {
		transition: transform 1s ease;
		transform: scale(1) rotate(0deg);
	}

	.rotate:hover {
		transform: scale(1.1) rotate(720deg);
	}

	.discord,
	.github {
		margin-top: 9px;
		margin-left: 10px;
		margin-right: 10px;
		font-size: 30px;
		transform-origin: center; /* Set the transform origin to center */
		transition: color 0.3s ease-in-out, transform 0.3s ease-in-out, fill 0.3s ease-in-out;
	}

	/* Center the icons */
	.a-icons,
	.icon-wrapper {
		display: flex;
		justify-content: center;
	}

	/* Hover effect for icons and images */
	.discord:hover,
	.github:hover {
		/* Apply the effect to the image when it's hovered */
		transform: scale(1.2); /* Increase the scale on hover */
	}
</style>
