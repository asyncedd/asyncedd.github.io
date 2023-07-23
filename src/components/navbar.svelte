<div class="w-[100%] bg-ctp-blue overflow-auto navbar flex">
	<a href="https://discord.com/user/797422750321999943" class="text-center">
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

<style>
	/* Navbar links */
	.navbar {
		justify-content: flex-end;
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

	/* Hover effect */
	.discord:hover {
		color: #6666ff;
		transform: scale(1.2); /* Increase the scale on hover */
	}

	.github:hover {
		color: #fafafa;
		transform: scale(1.2);
	}

	/* Add responsiveness - will automatically display the navbar vertically instead of horizontally on screens less than 500 pixels */
	@media screen and (max-width: 500px) {
		.navbar a {
			float: none;
			display: block;
		}
	}
</style>
