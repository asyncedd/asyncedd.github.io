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
		const sunAndMoon = document.querySelector('.sunAndMoon') as HTMLElement | null;
		if (sunAndMoon) {
			sunAndMoon.style.opacity = '0';
			sunAndMoon.style.transform = 'translateY(-30px)';

			setTimeout(() => {
				theme.update((currentTheme) => {
					const newTheme = currentTheme === 'ctp-mocha' ? 'ctp-latte' : 'ctp-mocha';
					sunAndMoon.style.opacity = '1';
					sunAndMoon.style.transform = 'translateY(0)';
					return newTheme;
				});
			}, 300);
		}
	};

	const handleMouseOver = () => {
		const sunAndMoon = document.querySelector('.sunAndMoon') as HTMLElement | null;
		if (sunAndMoon) {
			const removeClass = currentTheme === 'ctp-mocha' ? 'text-ctp-lavender' : 'text-ctp-yellow';
			const addClass = currentTheme === 'ctp-mocha' ? 'text-ctp-peach' : 'text-ctp-lavender';

			updateSunAndMoonStyles(sunAndMoon, 'scale(1.3) rotate(370deg)', removeClass, addClass);
		}
	};

	const handleMouseOut = () => {
		const sunAndMoon = document.querySelector('.sunAndMoon') as HTMLElement | null;
		if (sunAndMoon) {
			const removeClass = currentTheme === 'ctp-mocha' ? 'text-ctp-peach' : 'text-ctp-lavender';
			updateSunAndMoonStyles(sunAndMoon, 'scale(1.0) rotate(0deg)', removeClass);
		}
	};

	const updateSunAndMoonStyles = (element, transformValue, removeClass, addClass) => {
		element.style.transform = transformValue;

		if (removeClass) {
			element.classList.remove(removeClass);
		}

		if (addClass) {
			element.classList.add(addClass);
		}
	};

	onMount(() => {
		const sunAndMoon = document.querySelector('.sunAndMoon') as HTMLElement | null;
		if (sunAndMoon) {
			sunAndMoon.addEventListener('mouseover', handleMouseOver);
			sunAndMoon.addEventListener('mouseout', handleMouseOut);
		}
	});
</script>

<head>
	<script src="https://kit.fontawesome.com/777ef29ec5.js" crossorigin="anonymous"></script>
</head>
<nav class="transparent sticky bg-ctp-yellow {$theme}" style="z-index: 9998;">
	<ul class="navbar-list">
		<a class="enlarge" href="">
			<li>
				<span class="async menu-heading text-[3rem] font-semibold"
					><i class="fa-solid fa-house" /> async</span
				>
			</li>
		</a>
		<li style="flex-grow: 1;" />
		<li>
			<div
				role="button"
				tabindex="0"
				class={`fa-solid ${$theme === 'ctp-latte' ? 'fa-moon' : 'fa-sun'} fg-ctp-base text-[2rem] ${
					$theme === 'ctp-latte' ? 'text-black' : 'text-black'
				} sunAndMoon`}
				href="#"
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
		align-items: center;
	}

	li {
		margin-right: 10px;
	}

	ul.navbar-list {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 5%;
	}

	.menu-heading {
		font-size: 25px;
	}

	.sticky {
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.github {
		transition: opacity 0.3s ease-in-out, transform 0.5s ease-in-out, color 0.5s ease-in-out;
	}

	.github:hover {
		color: #f5f5f5;
		transform: scale(1.3);
	}

	.discord {
		transition: opacity 0.3s ease-in-out, transform 0.5s ease-in-out, color 0.5s ease-in-out;
	}

	.discord:hover {
		color: #5865f2;
		transform: scale(1.3);
	}

	.sunAndMoon {
		transition: opacity 0.3s ease-in-out, transform 0.5s ease-in-out, color 0.5s ease-in-out;
	}

	.bg-black {
		color: black;
	}

	.enlarge {
		transform: scale(1);
		transition: transform 0.5s ease-in-out;
	}

	.enlarge:hover {
		transform: scale(1.3);
	}
</style>
