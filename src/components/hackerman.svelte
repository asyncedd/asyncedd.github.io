<script context="module">
	import { writable } from 'svelte/store';

	export const animating = writable(false);
</script>

<script lang="ts">
	const lettersArray =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()|'.split('');

	let animationId: number | null = null;

	function animateH1Element(target: HTMLElement, targetValue: string) {
		if (target.dataset.animating === 'true') return;

		cancelAnimationFrame(animationId as number);
		target.dataset.animating = 'true';
		animating.set(true);

		const updateInterval = 30;
		const iterationStep = 0.2;
		let iteration = 0;
		let lastUpdateTime = performance.now();

		function animate(currentTime: number) {
			const deltaTime = currentTime - lastUpdateTime;

			if (deltaTime >= updateInterval) {
				const newText = targetValue
					.split('')
					.map((char, index) =>
						index < iteration
							? char
							: targetValue !== ' '
							? lettersArray[Math.floor(Math.random() * lettersArray.length)]
							: ' '
					)
					.join('');

				target.innerText = newText;

				if (iteration >= targetValue.length) {
					animating.set(false);
					target.dataset.animating = 'false';
					return;
				}

				iteration += iterationStep;
				lastUpdateTime = currentTime - (deltaTime - updateInterval);
			}

			animationId = requestAnimationFrame(animate);
		}

		animate(performance.now());
	}

	function handleMouseOver(event: MouseEvent): void {
		const target = event.target as HTMLElement;
		const targetValue = target.dataset.value || '';
		animateH1Element(target, targetValue);
	}

	const h1Elements = document.querySelectorAll('h1');
	h1Elements.forEach((h1) => {
		const targetValue = h1.dataset.value || '';
		if (targetValue) {
			h1.addEventListener('mouseover', handleMouseOver);
			h1.dataset.animating = 'false';
			animateH1Element(h1, targetValue);
		}
	});
</script>
