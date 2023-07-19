<script lang="ts">
	import { onMount } from 'svelte';

	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()';
	const animationIntervalDuration = 30;

	function hackerMan(): void {
		const h1Elements = Array.from(document.querySelectorAll('h1'));

		for (const h1 of h1Elements) {
			h1.addEventListener('mouseover', handleMouseOver);
		}
	}

	function getRandomLetter(): string {
		const randomIndex = Math.floor(Math.random() * letters.length);
		return letters[randomIndex];
	}

	function handleMouseOver(event) {
		const target = event.target;

		if (target.classList.contains('animating')) {
			return;
		}

		target.classList.add('animating');

		let iteration = 0;
		let interval = undefined;

		if (interval) {
			clearInterval(interval);
		}

		interval = setInterval(() => {
			const targetValue = target.dataset.value;
			const currentText = target.innerText;
			let nextText = '';

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
