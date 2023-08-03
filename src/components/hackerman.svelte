<script context="module">
	import { writable } from 'svelte/store';

	export const animating = writable(false);
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	const lettersArray: string[] =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()|'.split('');
	const animationIntervalDuration: number = 30;
	const animationFrameDuration: number = 30;

	function getRandomLetter(targetValue: string, iteration: number): string {
		const randomIndex: number = Math.floor(Math.random() * lettersArray.length);
		let letter: string = lettersArray[randomIndex];
		const targetChar: string = targetValue[iteration];

		if (targetChar === ' ') {
			return targetChar;
		}

		return letter;
	}

	function animateH1Element(target: HTMLElement) {
		const targetValue: string = target.dataset.value as string;
		const animationDuration: number = animationIntervalDuration * targetValue.length;

		animating.set(true);
		target.dataset.animating = 'true';

		let iteration: number = 0;
		let interval: number | undefined = undefined;

		function animate() {
			const currentText: string = target.textContent!;
			let nextText: string = '';

			for (let i = 0; i < currentText.length; i++) {
				if (iteration === 0) {
					nextText += getRandomLetter(targetValue, iteration);
				} else if (i < iteration) {
					nextText += targetValue[i];
				} else if (i === iteration && currentText[i] === targetValue[i]) {
					nextText += targetValue[i];
				} else {
					nextText += getRandomLetter(targetValue, iteration);
				}
			}

			target.textContent = nextText;

			if (iteration >= targetValue.length) {
				target.dataset.animating = 'false';
				animating.set(false);
			} else if (nextText[iteration] === targetValue[iteration]) {
				iteration++;
				setTimeout(() => {
					interval = window.requestAnimationFrame(animate);
				}, animationFrameDuration);
			} else {
				setTimeout(() => {
					interval = window.requestAnimationFrame(animate);
				}, animationFrameDuration);
			}
		}

		setTimeout(() => {
			animate();
		}, animationDuration);
	}

	function handleMouseOver(event: MouseEvent): void {
		const target: HTMLElement = event.target as HTMLElement;
		animateH1Element(target);
	}

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: no-preference)')) {
			const h1Elements: NodeListOf<HTMLHeadingElement> = document.querySelectorAll('h1');
			h1Elements.forEach((h1: HTMLHeadingElement) => {
				h1.addEventListener('mouseover', handleMouseOver);
				h1.dataset.animating = 'false';
				animateH1Element(h1);
			});
		}
	});
</script>
