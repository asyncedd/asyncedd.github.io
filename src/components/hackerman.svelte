<script context="module">
	import { writable } from 'svelte/store';
	export let animating = writable(false);
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	// Specify the types for variables and functions
	const lettersArray: string[] =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()|'.split('');
	const animationIntervalDuration: number = 30;
	const animationFrameDuration: number = 30; // Interval between each animation iteration (in milliseconds)

	function getRandomLetter(
		targetValue: string,
		iteration: number,
		isLastIteration: boolean
	): string {
		const randomValue: number = Math.random();
		const randomIndex: number = Math.floor(Math.random() * lettersArray.length);
		let letter: string = lettersArray[randomIndex];
		const targetChar: string = targetValue[iteration];

		if (
			randomValue < 0.5 &&
			randomValue > 0.3 &&
			iteration !== 0 &&
			targetChar !== ' ' &&
			!isLastIteration
		) {
			return targetChar;
		}

		if (targetChar === ' ') {
			return targetChar;
		}

		if (iteration !== 0) {
			if (
				letter.toUpperCase() === targetChar ||
				letter.toLowerCase() === targetChar ||
				targetChar === ' '
			) {
				if (letter === letter.toUpperCase()) {
					return letter.toLowerCase();
				} else {
					return letter.toUpperCase();
				}
			}
		}

		return letter;
	}

	// Specify the event type for the event parameter
	function handleMouseOver(event: MouseEvent): void {
		const target: HTMLElement = event.target as HTMLElement;

		if (target.dataset.animating === 'true') {
			return;
		}

		animating.set(true);
		target.dataset.animating = 'true';

		let iteration: number = 0;
		let interval: number | undefined = undefined;

		// Delay the animation start
		setTimeout(() => {
			function animate() {
				const targetValue: string = target.dataset.value as string;
				const currentText: string = target.textContent!;
				let nextText: string = '';

				for (let i = 0; i < currentText.length; i++) {
					const currentChar = currentText[i];
					if (currentChar === ' ') {
						// Preserve spaces as they are
						nextText += ' ';
					} else if (iteration === 0) {
						// Always randomize during the first iteration
						nextText += getRandomLetter(targetValue, iteration, false);
					} else if (i < iteration) {
						nextText += targetValue[i];
					} else if (currentChar === targetValue[i]) {
						nextText += targetValue[i]; // Use the character from targetValue directly
					} else {
						nextText += getRandomLetter(
							targetValue,
							iteration,
							iteration === targetValue.length - 1
						);
					}
				}

				target.textContent = nextText;

				if (iteration >= targetValue.length) {
					target.dataset.animating = 'false';
					animating.set(false);
				} else if (nextText[iteration] === targetValue[iteration]) {
					iteration++;
					// Schedule the next animation frame after the animationFrameDuration
					setTimeout(() => {
						interval = window.requestAnimationFrame(animate);
					}, animationFrameDuration);
				} else {
					// If the character hasn't reached the target yet, continue animating
					setTimeout(() => {
						interval = window.requestAnimationFrame(animate);
					}, animationFrameDuration);
				}
			}

			animate();
		}, animationIntervalDuration);
	}

	onMount(() => {
		const h1Elements: NodeListOf<HTMLHeadingElement> = document.querySelectorAll('h1');
		for (const h1 of h1Elements) {
			h1.addEventListener('mouseover', handleMouseOver);
			h1.dataset.animating = 'false'; // Initialize the data attribute
			animateH1Element(h1); // Start the animation for each h1 element
		}
	});

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
					// Always randomize during the first iteration
					nextText += getRandomLetter(targetValue, iteration);
				} else if (i < iteration) {
					nextText += targetValue[i];
				} else if (i === iteration && currentText[i] === targetValue[i]) {
					nextText += targetValue[i]; // Use the character from targetValue directly
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
				// Schedule the next animation frame after the animationFrameDuration
				setTimeout(() => {
					interval = window.requestAnimationFrame(animate);
				}, animationFrameDuration);
			} else {
				// If the character hasn't reached the target yet, continue animating
				setTimeout(() => {
					interval = window.requestAnimationFrame(animate);
				}, animationFrameDuration);
			}
		}

		// Delay the animation start
		setTimeout(() => {
			animate();
		}, animationDuration);
	}
</script>
