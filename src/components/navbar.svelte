<script context="module" lang="ts">
	import { writable } from 'svelte/store';

	export const theme = writable('ctp-mocha');
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	let currentTheme = '';

	theme.subscribe((value) => {
		currentTheme = value;
	});

	const toggleTheme = () => {
		const sunAndMoon = document.querySelector('.sunAndMoon');
		if (sunAndMoon) {
			sunAndMoon.style.opacity = '0';
			sunAndMoon.style.transform = 'translateY(-20px)';

			setTimeout(() => {
				theme.update((currentTheme) => {
					if (currentTheme === 'ctp-mocha') {
						sunAndMoon.style.opacity = '1';
						sunAndMoon.style.transform = 'translateY(0)';
						return 'ctp-latte';
					} else {
						sunAndMoon.style.opacity = '1';
						sunAndMoon.style.transform = 'translateY(0)';
						return 'ctp-mocha';
					}
				});
			}, 200);
		}
	};

	onMount(() => {
		const sunAndMoon = document.querySelector('.sunAndMoon');
		sunAndMoon.onmouseover = () => {
			if (currentTheme == 'ctp-mocha') {
				sunAndMoon.classList.remove('text-ctp-lavender');
				sunAndMoon.classList.add('text-ctp-peach');
			} else {
				sunAndMoon.classList.remove('text-ctp-yellow');
				sunAndMoon?.classList.add('text-ctp-lavender');
			}
		};
		sunAndMoon.onmouseout = () => {
			if (currentTheme == 'ctp-mocha') {
				sunAndMoon.classList.remove('text-ctp-peach');
			} else {
				sunAndMoon.classList.remove('text-ctp-lavender');
			}
		};
	});
</script>

<head>
	<script src="https://kit.fontawesome.com/777ef29ec5.js" crossorigin="anonymous"></script>
</head>

<nav class="transparent sticky bg-ctp-yellow {$theme}" style="z-index: 9998;">
	<ul class="navbar-list">
		<li><span class="async menu-heading text-[3rem] font-semibold">async</span></li>
		<li style="flex-grow: 1;" />
		<li>
			<a
				class={`fa-solid ${$theme === 'ctp-latte' ? 'fa-moon' : 'fa-sun'} fg-ctp-base text-[2rem] ${
					$theme === 'ctp-latte' ? 'text-black' : 'text-black'
				} sunAndMoon`}
				on:click={toggleTheme}
			/>
		</li>
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
		transition: color 0.3s ease-in-out;
	}

	.github:hover {
		color: #f5f5f5;
	}

	.discord {
		transition: color 0.3s ease-in-out;
	}

	.discord:hover {
		color: #5865f2;
	}

	.sunAndMoon {
		transition: opacity 0.3s ease-in-out, transform 0.5s ease-in-out, color 0.3s ease-in-out;
	}

	.bg-black {
		color: black;
	}
</style>
