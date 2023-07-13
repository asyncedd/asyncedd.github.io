<head>
	<script src="https://kit.fontawesome.com/777ef29ec5.js" crossorigin="anonymous"></script>
</head>

<nav class="transparent sticky bg-ctp-blue" style="z-index: 9999;">
	<ul class="navbar-list">
		<li><span class="menu-heading">async</span></li>
		<li style="flex-grow: 1;" />
		<li>
			<a class="fa-brands fa-github github text-[3rem]" href="https://github.com/asyncedd" />
		</li>
		<li>
			<a
				class="fa-brands fa-discord discord text-[3rem]"
				href="https://discord.com/users/797422750321999943"
			/>
		</li>
	</ul>
</nav>

<style>
	nav {
		padding: 10px;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		align-items: center; /* Align items vertically */
	}

	li {
		margin-right: 10px;
	}

	ul.navbar-list {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: flex-start; /* Align items to the left */
	}

	.menu-heading {
		font-size: 25px;
		color: #333;
	}

	.menu-link {
		font-size: 25px;
		color: #333;
		text-decoration: none;
	}

	/* Add sticky styles */
	.sticky {
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.github {
		@apply text-ctp-text;
		transition: color 0.3s ease-in;
	}

	.github:hover {
		color: #333;
	}

	.discord {
		@apply text-ctp-text;
		transition: color 0.3s ease-in;
	}

	.discord:hover {
		color: #5865f2;
	}
</style>
