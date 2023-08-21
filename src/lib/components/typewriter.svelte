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

<p class="{isTyping ? 'typing-cursor' : ''} flex" style="align-items: flex-end;" id="typewriter">
	{currentText}
</p>

<style lang="postcss">
	#typewriter.typing-cursor span {
		opacity: 0.3;
	}

	#typewriter.typing-cursor::after {
		content: '';
		height: 1rem;
		border-left: 1px solid theme(colors.content);
		position: relative;
		margin-left: 3px;
		top: -3px;
		animation: blink-caret 1s ease-in-out infinite;
		transition: opacity 1s ease-in-out;
	}

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
