<script lang="ts">
	import { onMount } from 'svelte';

	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()';
	const animationIntervalDuration = 10;

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
					nextText += getRandomLetter();
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

	function getNonMatchingIndices(
		index: number,
		targetValue: string,
		currentText: string
	): number[] {
		const nonMatchingIndices: number[] = [];

		for (let i = 0; i < targetValue.length; i++) {
			if (i !== index && targetValue[i] !== currentText[i]) {
				nonMatchingIndices.push(i);
			}
		}

		if (nonMatchingIndices.length === 0 && currentText[index] !== targetValue[index]) {
			for (let i = 0; i < targetValue.length; i++) {
				if (i !== index && targetValue[i] === currentText[index]) {
					nonMatchingIndices.push(i);
					break;
				}
			}
		}

		return nonMatchingIndices;
	}

	onMount(() => {
		hackerMan();
	});
</script>
