<script>
	import { onMount } from 'svelte';

	/**
	 * A list of sentences to typewrite
	 * @type {string[]}
	 */
	export let sentences = [];
	let speed = 50;
	let currentText = '';
	let currentSentenceIndex = 0;
	let isTyping = false;

	onMount(() => {
		const t = () => {
			isTyping = !0;
			let i = 0,
				s = sentences[currentSentenceIndex];
			const interval = setInterval(() => {
				i < s.length
					? (currentText += s[i++])
					: (clearInterval(interval),
					  (isTyping = !0),
					  setTimeout(() => {
							isTyping = !1;
							const back = setInterval(() => {
								currentText = currentText.slice(0, -1);
								currentText ||
									(clearInterval(back),
									(currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length),
									t());
							}, speed / 2);
					  }, 3e3));
			}, speed);
		};
		t();
	});
</script>

<p
	class={isTyping
		? 'after:content-[""] after:border-l-[1px] after:border-l-content after:ml-[3px] after:animate-[blink-caret_1s_ease-in-out_infinite] after:transition-[opacity] after:duration-[1s] after:ease-in-out'
		: ''}
	style="align-items: flex-end;
  "
>
	{currentText}
</p>

<style>
	@keyframes blink-caret {
		from,
		to {
			opacity: 1;
			transform: scaleY(1);
		}
		50% {
			opacity: 0;
			transform: scaleY(0);
		}
	}
</style>
