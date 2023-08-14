<script context="module">
	import { writable } from 'svelte/store';

	export const animating = writable(false);
</script>

<script lang="ts">
	const lettersArray =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()|'.split('');

	let interval: undefined | any = null;

	function animateH1Element(target: HTMLElement, targetValue: string) {
		let iteration = 0;

		if (target.dataset.animating !== 'true') {
			clearInterval(interval);
			target.dataset.animating = 'true';
			animating.set(true);

			interval = setInterval(() => {
				target.innerText = [...targetValue]
					.map((_, index) =>
						index < iteration
							? targetValue[index]
							: targetValue !== ' '
							? lettersArray[Math.floor(Math.random() * lettersArray.length)]
							: ' '
					)
					.join('');

				if (iteration >= targetValue.length) {
					clearInterval(interval);
					animating.set(false);
					target.dataset.animating = 'false';
				}

				iteration += 1 / 5;
			}, 30);
		}
	}

	function handleMouseOver(event: MouseEvent): void {
		const target = event.target as HTMLElement;
		const targetValue = target.dataset.value || '';
		animateH1Element(target, targetValue);
	}

	const h1Elements = document.querySelectorAll('h1');
	h1Elements.forEach((h1) => {
		if (h1.dataset.value !== '') {
			h1.addEventListener('mouseover', handleMouseOver);
			h1.dataset.animating = 'false';
			animateH1Element(h1, h1.dataset.value || '');
		}
	});
</script>
