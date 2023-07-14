<head>
	<script src="https://kit.fontawesome.com/777ef29ec5.js" crossorigin="anonymous"></script>
</head>

<nav class="transparent sticky bg-ctp-yellow" style="z-index: 9999;">
	<ul class="navbar-list">
		<li><span class="async menu-heading text-[3rem] font-semibold">async</span></li>
		<li style="flex-grow: 1;" />
		<li>
			<a class="fa-brands fa-github github text-[2rem]" href="https://github.com/asyncedd" />
		</li>
		<li>
			<a
				class="fa-brands fa-discord discord text-[2rem]"
				href="https://discord.com/users/797422750321999943"
			/>
		</li>
	</ul>
</nav>

<style>
	.async {
		--s: 0.1em; /* the thickness of the line */
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
	}

	.async:hover {
		--_p: 100%;
	}

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
		justify-content: space-between; /* Align items to the left */
		align-items: center;
		padding: 0 5%;
	}

	.menu-heading {
		font-size: 25px;
	}

	/* Add sticky styles */
	.sticky {
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.github {
		@apply text-ctp-text;
		transition: color 0.3s ease-in-out;
	}

	.github:hover {
		color: #333;
	}

	.discord {
		@apply text-ctp-text;
		transition: color 0.3s ease-in-out;
	}

	.discord:hover {
		color: #5865f2;
	}
</style>
