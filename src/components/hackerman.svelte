<script context="module">
	import { writable } from 'svelte/store';
	export let animating = writable(false);
</script>

<script>
	import { onMount } from 'svelte';

	const lettersArray =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()|'.split('');
	const animationIntervalDuration = 30;
	const animationFrameDuration = 30;

	function getRandomLetter(targetValue, iteration, previousInterpretationCorrect) {
		if (targetValue[iteration] === ' ') return ' ';

		const randomValue = Math.random();
		const randomIndex = Math.floor(Math.random() * lettersArray.length);
		const letter = lettersArray[randomIndex];

		if (
			previousInterpretationCorrect &&
			randomValue < 0.5 &&
			randomValue > 0.4 &&
			iteration !== 0
		) {
			return targetValue[iteration];
		}

		if (
			iteration !== 0 &&
			(letter.toUpperCase() === targetValue[iteration] ||
				letter.toLowerCase() === targetValue[iteration] ||
				targetValue[iteration] === ' ')
		) {
			return letter === letter.toLowerCase() ? letter.toLowerCase() : letter.toUpperCase();
		}

		return letter;
	}

	function animateTarget(target, targetValue) {
		const animationDuration = animationIntervalDuration * targetValue.length;
		let iteration = 0;
		let interval;
		let previousInterpretationCorrect = true;

		animating.set(true);
		target.dataset.animating = 'true';

		setTimeout(animate, animationDuration);

		function animate() {
			const currentText = target.textContent;
			let nextText = '';

			for (let i = 0; i < currentText.length; i++) {
				if (iteration === 0) {
					nextText += getRandomLetter(targetValue, iteration, previousInterpretationCorrect);
				} else if (i < iteration || currentText[i] === targetValue[i]) {
					nextText += targetValue[i];
				} else {
					previousInterpretationCorrect = false;
					nextText += getRandomLetter(targetValue, iteration, previousInterpretationCorrect);
				}
			}

			target.textContent = nextText;

			if (iteration >= targetValue.length) {
				target.dataset.animating = 'false';
				animating.set(false);
			} else if (nextText[iteration] === targetValue[iteration]) {
				iteration++;
				previousInterpretationCorrect = true;
				setTimeout(() => {
					interval = window.requestAnimationFrame(animate);
				}, animationFrameDuration);
			} else {
				setTimeout(() => {
					interval = window.requestAnimationFrame(animate);
				}, animationFrameDuration);
			}
		}
	}

	function handleMouseOver(event) {
		const target = event.target;

		if (target.dataset.animating === 'true') {
			return;
		}

		animateTarget(target, target.dataset.value);
	}

	onMount(() => {
		const h1Elements = document.querySelectorAll('h1');
		for (const h1 of h1Elements) {
			h1.addEventListener('mouseover', handleMouseOver);
			h1.dataset.animating = 'false';
			animateTarget(h1, h1.dataset.value);
		}
	});
</script>
