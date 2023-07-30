<div class="header" style="margin: 0;">
	<div>
		<svg
			class="waves"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 24 150 28"
			preserveAspectRatio="none"
			shape-rendering="auto"
		>
			<defs>
				<path
					id="gentle-wave"
					d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
				/>
			</defs>
			<g class="parallax">
				<use xlink:href="#gentle-wave" x="48" y="0" fill="var(--wave-color-1)" />
				<use xlink:href="#gentle-wave" x="48" y="3" fill="var(--wave-color-2)" />
				<use xlink:href="#gentle-wave" x="48" y="5" fill="var(--wave-color-3)" />
				<use xlink:href="#gentle-wave" x="48" y="7" fill="var(--wave-color-4)" />
			</g>
		</svg>
	</div>
</div>

<style>
	:root {
		--wave-color-1: rgba(137, 180, 250, 0.7);
		--wave-color-2: rgba(137, 180, 250, 0.5);
		--wave-color-3: rgba(137, 180, 250, 0.3);
		--wave-color-4: rgb(137, 180, 250);
	}

	/* Override the CSS variables for dark mode when body has "dark" class */
	:root.dark {
		--wave-color-1: rgba(30, 30, 46, 0.7);
		--wave-color-2: rgba(30, 30, 46, 0.5);
		--wave-color-3: rgba(30, 30, 46, 0.3);
		--wave-color-4: rgb(30, 30, 46);
	}

	.header {
		position: relative;
	}

	.waves {
		position: relative;
		width: 100%;
		height: 15vh;
		margin-bottom: -7px; /*Fix for safari gap*/
		min-height: 100px;
		max-height: 150px;
	}

	/* Animation */

	.parallax > use {
		animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
	}
	.parallax > use:nth-child(1) {
		animation-delay: -2s;
		animation-duration: 7s;
	}
	.parallax > use:nth-child(2) {
		animation-delay: -3s;
		animation-duration: 10s;
	}
	.parallax > use:nth-child(3) {
		animation-delay: -4s;
		animation-duration: 13s;
	}
	.parallax > use:nth-child(4) {
		animation-delay: -5s;
		animation-duration: 20s;
	}
	@keyframes move-forever {
		0% {
			transform: translate3d(-90px, 0, 0);
		}
		100% {
			transform: translate3d(85px, 0, 0);
		}
	}
</style>
