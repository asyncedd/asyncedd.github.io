<script lang="ts">
	import { onMount } from 'svelte';

	function hackerMan(): void {
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

		let interval = null;

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
							if (index < iteration) {
								return event.target.dataset.value[index];
							}

							return String.fromCharCode(Math.floor(Math.random() * 26) + 65); // Random uppercase letter
						})
						.join('');

					if (iteration >= event.target.dataset.value.length) {
						clearInterval(interval);
					}

					iteration += 1 / 3;
				}, 30);
			};
		});
	}

	onMount(() => {
		hackerMan();
	});
</script>
