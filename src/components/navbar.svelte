<script>
	// Navbar.svelte
</script>

<nav class="transparent sticky bg-ctp-blue" style="opacity: 0.9; z-index: 9999;">
	<ul>
		<li><a href="#">Home</a></li>
		<li><a href="#">About</a></li>
		<li><a href="#">Contact</a></li>
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
	}

	li {
		display: inline-block;
		margin-right: 10px;
	}

	a {
		text-decoration: none;
		color: #333;
	}

	/* Add sticky styles */
	.sticky {
		position: sticky;
		top: 0;
		z-index: 100;
	}
</style>
