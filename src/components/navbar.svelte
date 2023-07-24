<div class="w-[100%] bg-ctp-blue overflow-auto navbar flex">
	<div class="left-content pl-3">
		<img src="moutains.webp" alt="" class="w-10 h-10 rounded-[100%] aspect-square" />
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
			margin-right: 0; /* Reset the margin for the image on smaller screens */
		}
	}
</style>
