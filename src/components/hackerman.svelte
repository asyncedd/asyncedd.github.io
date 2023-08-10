<script context="module">
	import { writable } from 'svelte/store';

	export const animating = writable(false);
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	const lettersArray: string[] =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()|'.split('');
	const animationIntervalDuration: number = 30;
	const animationFrameDuration: number = 15;

	function getRandomLetter(targetChar: string): string {
		const randomIndex: number = Math.floor(Math.random() * lettersArray.length);
		const randomChar: string = lettersArray[randomIndex];

		if (randomIndex >= 0.3 && randomIndex < 0.35) {
			return targetChar;
		}

		if (randomChar.toUpperCase() === targetChar || randomChar.toLowerCase() === targetChar) {
			return targetChar === targetChar.toUpperCase()
				? randomChar.toUpperCase()
				: randomChar.toLowerCase();
		}

		if (targetChar === ' ') {
			return targetChar;
		}

		return randomChar;
	}

	function animateH1Element(target: HTMLElement, targetValue: string) {
		const animationDuration: number = animationIntervalDuration * targetValue.length;

		animating.set(true);
		target.dataset.animating = 'true';

		let iteration: number = 0;

		function animate() {
			const currentText: string = target.textContent!;
			let nextText: string = '';

			for (let i = 0; i < currentText.length; i++) {
				if (iteration === 0) {
					nextText += getRandomLetter(targetValue[i]);
				} else if (i < iteration || (i === iteration && currentText[i] === targetValue[i])) {
					nextText += targetValue[i];
				} else {
					nextText += getRandomLetter(targetValue[i]);
				}
			}

			target.textContent = nextText;

			if (iteration >= targetValue.length) {
				target.dataset.animating = 'false';
				animating.set(false);
			} else if (nextText[iteration] === targetValue[iteration]) {
				iteration++;
				setTimeout(() => {
					window.requestAnimationFrame(animate);
				}, animationFrameDuration);
			} else {
				setTimeout(() => {
					window.requestAnimationFrame(animate);
				}, animationFrameDuration);
			}
		}

		setTimeout(() => {
			animate();
		}, animationDuration);
	}

	function handleMouseOver(event: MouseEvent): void {
		const target: HTMLElement = event.target as HTMLElement;
		const targetValue: string = target.dataset.value || '';
		animateH1Element(target, targetValue);
	}

	setTimeout(() => {
		const h1Elements: NodeListOf<HTMLHeadingElement> = document.querySelectorAll('h1');
		h1Elements.forEach((h1: HTMLHeadingElement) => {
			h1.addEventListener('mouseover', handleMouseOver);
			h1.dataset.animating = 'false';
			animateH1Element(h1, h1.dataset.value || '');
		});
	});
</script>
