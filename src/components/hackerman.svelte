<script lang="ts">
	import { onMount } from 'svelte';

	// Specify the types for variables and functions
	const letters: string =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()';
	const animationIntervalDuration: number = 30;

	function hackerMan(): void {
		const h1Elements: NodeListOf<HTMLHeadingElement> = document.querySelectorAll('h1');

		for (const h1 of h1Elements) {
			h1.addEventListener('mouseover', handleMouseOver);
		}
	}

	function getRandomLetter(): string {
		const randomIndex: number = Math.floor(Math.random() * letters.length);
		return letters[randomIndex];
	}

	// Specify the event type for the event parameter
	function handleMouseOver(event: MouseEvent): void {
		const target: HTMLElement = event.target as HTMLElement;

		if (target.classList.contains('animating')) {
			return;
		}

		target.classList.add('animating');

		let iteration: number = 0;
		let interval: any = undefined; // Specify the type for 'interval'

		if (interval) {
			clearInterval(interval);
		}

		interval = setInterval(() => {
			const targetValue: string = target.dataset.value as string;
			const currentText: string = target.innerText;
			let nextText: string = '';

			for (let i = 0; i < currentText.length; i++) {
				if (iteration === 0) {
					if (Math.random() < 0.5) {
						nextText += targetValue[i]; // 50% chance of being correct
					} else {
						nextText += getRandomLetter(); // 50% chance of random character
					}
				} else if (i < iteration) {
					nextText += targetValue[i];
				} else if (i === iteration && currentText[i] === targetValue[i]) {
					nextText += targetValue[i]; // Use the character from targetValue directly
				} else {
					nextText += getRandomLetter();
				}
			}

			target.innerText = nextText;

			if (iteration >= targetValue.length) {
				clearInterval(interval);
				target.classList.remove('animating');
			} else if (nextText[iteration] === targetValue[iteration]) {
				iteration++;
			}
		}, animationIntervalDuration);
	}

	onMount(() => {
		hackerMan();
	});
</script>
