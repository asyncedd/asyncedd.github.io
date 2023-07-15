<script lang="ts">
	import { onMount } from 'svelte';

	function hackerMan(): void {
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()';

		const h1Elements = Array.from(document.querySelectorAll('h1'));

		h1Elements.forEach((h1) => {
			h1.addEventListener('mouseover', (event) => {
				const target = event.target as HTMLHeadingElement; // Type assertion to HTMLHeadingElement

				if (target.classList.contains('animating')) {
					return; // Exit if already animating
				}

				target.classList.add('animating'); // Add class to indicate animation

				let iteration = 0;
				let interval: ReturnType<typeof setInterval> | undefined;

				if (interval) {
					clearInterval(interval);
				}

				interval = setInterval(() => {
					target.innerText = Array.from(target.innerText)
						.map((letter, index) => {
							if (iteration === 0) {
								return letters[Math.floor(Math.random() * letters.length)];
							} else if (index < iteration) {
								return target.dataset.value![index];
							} else if (index === iteration && letter === target.dataset.value![index]) {
								return letter; // Stop generating for this letter
							}

							return letters[Math.floor(Math.random() * letters.length)];
						})
						.join('');

					if (iteration >= target.dataset.value!.length) {
						clearInterval(interval!);
						target.classList.remove('animating'); // Remove class after animation
					} else if (target.innerText[iteration] === target.dataset.value![iteration]) {
						iteration++; // Move to the next letter
					}
				}, 30);
			});
		});
	}

	onMount(() => {
		hackerMan();
	});
</script>
