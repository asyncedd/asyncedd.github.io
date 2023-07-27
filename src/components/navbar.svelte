<div
	class="w-[100%] bg-ctp-blue overflow-auto navbar flex bg-opacity-90 backdrop-blur sticky top-0 z-50"
>
	<div class="left-content pl-3 inline-flex">
		<img src="moutains.webp" alt="" class="w-10 h-10 rounded-[100%] aspect-square rotate" />
		<div class="head-parent">
			<h2 class="pt-2 async">async</h2>
		</div>
	</div>
	<div class="right-content">
		<a href="https://discord.com/users/797422750321999943" class="text-center">
			<div class="icon-wrapper">
				<i class="fa-brands fa-discord discord" />
			</div>
		</a>
		<a href="https://github.com/asyncedd">
			<div class="icon-wrapper">
				<i class="fa-brands fa-github github" />
			</div>
		</a>
	</div>
</div>

<style>
	/* Navbar links */
	.navbar {
		display: flex;
		align-items: center; /* Align items vertically in the center */
		padding-right: 20px; /* Add desired padding to the right side */
		position: fixed; /* Make the navbar sticky */
		top: 0; /* Stick the navbar to the top of the viewport */
		z-index: 50; /* Add a higher z-index to ensure it stays above other elements */
	}

	/* Content on the left */
	.left-content {
		margin-right: auto; /* Pushes the content to the left side */
	}

	.left-content img {
		margin-right: 10px; /* Add some space between the image and the right content */
		transition: transform 0.3s ease-in-out; /* Add a transition for smooth animation */
	}

	/* Content on the right */
	.right-content {
		display: flex; /* Display the content on the right side in a flex layout */
		padding-right: 20px; /* Add desired padding to the right side */
	}

	.navbar a {
		padding: 12px;
		@apply text-ctp-base text-center;
		font-size: 30px;
		height: 60px;
	}

	/* Center the icons */
	.icon-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* Icons settings */
	i {
		font-size: 25px;
		transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
		transform-origin: center; /* Set the transform origin to center */
	}

	/* Hover effect for icons and images */
	.discord:hover,
	.github:hover,
	.left-content img:hover {
		/* Apply the effect to the image when it's hovered */
		transform: scale(1.2); /* Increase the scale on hover */
	}

	.discord:hover {
		color: #6666ff;
	}

	.github:hover {
		color: #fafafa;
	}

	/* Add responsiveness - will automatically display the navbar vertically instead of horizontally on screens less than 500 pixels */
	@media screen and (max-width: 500px) {
		.navbar a {
			float: none;
			display: block;
		}

		.left-content img {
			margin-right: 1.3; /* Reset the margin for the image on smaller screens */
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
				#1e1e2e 0
			)
			calc(100% - var(--_p, 0%)) / 200% 100%;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		transition: 0.5s;
		cursor: pointer;
		@apply pl-2 pr-2;
	}

	.async:hover {
		--_p: 100%;
	}

	.head-parent {
		transition: background 0.3s ease-in-out, transform 0.3s ease-in-out;
		@apply rounded-[0.7rem];
	}

	.head-parent:hover {
		@apply bg-ctp-base;
		--_p: 100%;
		transform: scale(1.1);
	}
</style>
