<div class="relative" style="margin: 0;">
	<div>
		<svg
			class="relative w-[100%] h-[15vh] mb-[-7px] min-h-[100px] max-h-[150px]"
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
				<use
					xlink:href="#gentle-wave"
					x="48"
					y="0"
					fill="var(--wave-color-1)"
					style="animation-delay: -2s;"
				/>
				<use
					xlink:href="#gentle-wave"
					x="48"
					y="3"
					fill="var(--wave-color-2)"
					style="animation-delay: -3s;"
				/>
				<use
					xlink:href="#gentle-wave"
					x="48"
					y="5"
					fill="var(--wave-color-3)"
					style="animation-delay: -4s;"
				/>
				<use
					xlink:href="#gentle-wave"
					x="48"
					y="7"
					fill="var(--wave-color-4)"
					style="animation-delay: -5s;"
				/>
			</g>
		</svg>
	</div>
</div>

<style lang="postcss" async>
	:root {
		--wave-color-1: theme('colors.accent/0.3');
		--wave-color-2: theme('colors.accent/0.5');
		--wave-color-3: theme('colors.primary/0.7');
		--wave-color-4: theme('colors.primary');
	}

	/* Animation */
	.parallax > use {
		animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
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
