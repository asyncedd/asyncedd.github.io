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

	function getRandomLetter(targetValue, iteration) {
		const randomValue = Math.random();
		const randomIndex = Math.floor(Math.random() * lettersArray.length);
		let letter = lettersArray[randomIndex];
		const targetChar = targetValue[iteration];

		if (targetChar === ' ') {
			return ' ';
		}

		if (randomValue < 0.5 && randomValue > 0.4 && iteration !== 0) {
			return targetChar;
		}

		if (
			iteration !== 0 &&
			(letter.toUpperCase() === targetChar ||
				letter.toLowerCase() === targetChar ||
				targetChar === ' ')
		) {
			if (letter === letter.toUpperCase()) {
				return letter.toLowerCase();
			} else {
				return letter.toUpperCase();
			}
		}

		return letter;
	}

	function handleMouseOver(event) {
		const target = event.target;

		if (target.dataset.animating === 'true') {
			return;
		}

		animating.set(true);
		target.dataset.animating = 'true';

		let iteration = 0;
		let interval;

		setTimeout(() => {
			animate();
		}, animationIntervalDuration);

		function animate() {
			const targetValue = target.dataset.value;
			const currentText = target.textContent;
			let nextText = '';

			for (let i = 0; i < currentText.length; i++) {
				const currentChar = currentText[i];
				if (iteration === 0) {
					nextText += getRandomLetter(targetValue, iteration);
				} else if (i < iteration) {
					nextText += targetValue[i];
				} else if (currentChar === targetValue[i]) {
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
	}

	onMount(() => {
		const h1Elements = document.querySelectorAll('h1');
		for (const h1 of h1Elements) {
			h1.addEventListener('mouseover', handleMouseOver);
			h1.dataset.animating = 'false';
			animateH1Element(h1);
		}
	});

	function animateH1Element(target) {
		const targetValue = target.dataset.value;
		const animationDuration = animationIntervalDuration * targetValue.length;

		animating.set(true);
		target.dataset.animating = 'true';

		let iteration = 0;
		let interval;

		setTimeout(() => {
			animate();
		}, animationDuration);

		function animate() {
			const currentText = target.textContent;
			let nextText = '';

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
	}
</script>
