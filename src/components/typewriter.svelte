<script lang="ts">
	import { onMount } from 'svelte';

	export let sentences: string[] = [];
	let speed = 50;
	let currentText = '';
	let currentSentenceIndex = 0;
	let isTyping = false;

	onMount(() => {
		function typeWriter() {
			isTyping = true;
			const sentenceLength = sentences[currentSentenceIndex].length;
			let i = 0;
			const interval = setInterval(() => {
				if (i < sentenceLength) {
					currentText += sentences[currentSentenceIndex].charAt(i);
					i++;
				} else {
					clearInterval(interval);
					isTyping = true;
					setTimeout(() => {
						isTyping = false;
						backspace();
					}, 3000);
				}
			}, speed);
		}

		function backspace() {
			const backspaceInterval = setInterval(() => {
				currentText = currentText.slice(0, -1);
				if (currentText === '') {
					clearInterval(backspaceInterval);
					currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
					typeWriter(); // Start typing the next sentence
				}
			}, speed / 2);
		}
		typeWriter();
	});
</script>

<p class="{isTyping ? 'typing-cursor' : ''} flex flex-end" id="typewriter">
	{#each currentText as letter, index}
		<span
			class="transition-colors ease-in-out duration-[0.5s]"
			style="animation-delay: {index * 25}ms; animation: cat-jump 0.1s forwards;"
			>{letter === ' ' ? '\u00A0' : letter}</span
		>
	{/each}
</p>

<style lang="postcss">
	@keyframes cat-jump {
		from {
			transform: translateY(-5px);
			opacity: 0.3;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	#typewriter.typing-cursor::after {
		content: '';
		height: 1rem;
		border-left: 1px solid theme(colors.content);
		position: relative;
		margin-left: 3px;
		margin-top: 5px;
		animation: blink-caret 0.75s step-end infinite; /* Blinking animation */
	}

	@keyframes blink-caret {
		from,
		to {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
	}
</style>
