<script context="module">
	import { writable } from 'svelte/store';

	export const animating = writable(false);
</script>

<script lang="ts">
	const lettersArray: string[] =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()|'.split('');

	let interval: undefined | any = null;

	function animateH1Element(target: HTMLElement, targetValue: string) {
		let iteration = 0;

		if (target.dataset.animating != 'true') {
			clearInterval(interval);

			target.dataset.animating = 'true';
			animating.set(true);

			interval = setInterval(() => {
				target.innerText = target.innerText
					.split('')
					.map((_, index) => {
						if (index < iteration) {
							return targetValue[index];
						}

						return lettersArray[Math.floor(Math.random() * 26)];
					})
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
		const target: HTMLElement = event.target as HTMLElement;
		const targetValue: string = target.dataset.value || '';
		animateH1Element(target, targetValue);
	}

	const h1Elements: NodeListOf<HTMLHeadingElement> = document.querySelectorAll('h1');
	h1Elements.forEach((h1: HTMLHeadingElement) => {
		h1.addEventListener('mouseover', handleMouseOver);
		h1.dataset.animating = 'false';
		animateH1Element(h1, h1.dataset.value || '');
	});
</script>
