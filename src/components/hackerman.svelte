<script lang="ts">
	import { onMount } from 'svelte';

	function hackerMan(): void {
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()';

		const h1Elements = document.querySelectorAll('h1');

		h1Elements.forEach((h1) => {
			h1.onmouseover = (event) => {
				let iteration = 0;
				let interval;

				clearInterval(interval);

				interval = setInterval(() => {
					event.target.innerText = event.target.innerText
						.split('')
						.map((letter, index) => {
							if (iteration === 0) {
								return letters[Math.floor(Math.random() * letters.length)];
							} else if (index < iteration) {
								return event.target.dataset.value[index];
							} else if (index === iteration) {
								if (letter === event.target.dataset.value[index]) {
									return letter; // Stop generating for this letter
								}
							}

							return letters[Math.floor(Math.random() * letters.length)];
						})
						.join('');

					if (iteration >= event.target.dataset.value.length) {
						clearInterval(interval);
					} else if (event.target.innerText[iteration] === event.target.dataset.value[iteration]) {
						iteration++; // Move to the next letter
					}
				}, 30);
			};
		});
	}

	onMount(() => {
		hackerMan();
	});
</script>
