<script lang="ts">
	import { onMount } from 'svelte';

	function hackerMan(): void {
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()';
		const h1Elements = document.querySelectorAll('h1');

		h1Elements.forEach((h1) => {
			let interval = null;
			let iteration = 0;
			let currentText = h1.innerText;
			const targetText = h1.dataset.value;

			h1.onmouseover = (event) => {
				clearInterval(interval);
				interval = setInterval(() => {
					let newText = '';
					for (let i = 0; i < currentText.length; i++) {
						const letter = currentText[i];
						if (iteration === 0 || i === iteration) {
							if (letter === targetText[i]) {
								newText += letter;
							} else {
								newText += letters[Math.floor(Math.random() * letters.length)];
							}
						} else {
							newText += letter;
						}
					}
					h1.innerText = newText;

					if (iteration >= targetText.length || newText === targetText) {
						clearInterval(interval);
					} else {
						iteration++;
					}
				}, 30);
			};
		});
	}

	onMount(() => {
		hackerMan();
	});
</script>
