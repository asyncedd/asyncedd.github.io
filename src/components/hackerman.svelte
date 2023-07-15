<script lang="ts">
	import { onMount } from 'svelte';

	function hackerMan(): void {
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()';

		const h1Elements = document.querySelectorAll('h1');

		h1Elements.forEach((h1) => {
			h1.addEventListener('mouseover', startAnimation, { once: true });

			function startAnimation(event) {
				if (event.target.classList.contains('animating')) {
					return; // Exit if already animating
				}

				event.target.classList.add('animating'); // Add class to indicate animation

				let iteration = 0;
				let interval;

				interval = setInterval(() => {
					const target = event.target;
					const targetValue = target.dataset.value;
					const currentText = target.innerText;
					const newText = [];

					for (let index = 0; index < currentText.length; index++) {
						const letter = currentText[index];

						if (iteration === 0) {
							newText.push(letters[Math.floor(Math.random() * letters.length)]);
						} else if (index < iteration) {
							newText.push(targetValue[index]);
						} else if (index === iteration && letter === targetValue[index]) {
							newText.push(letter);
						} else {
							newText.push(letters[Math.floor(Math.random() * letters.length)]);
						}
					}

					target.innerText = newText.join('');

					if (iteration >= targetValue.length) {
						clearInterval(interval);
						target.classList.remove('animating'); // Remove class after animation
					} else if (target.innerText[iteration] === targetValue[iteration]) {
						iteration++; // Move to the next letter
					}
				}, 30);
			}
		});
	}

	onMount(() => {
		hackerMan();
	});
</script>
