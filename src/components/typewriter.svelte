<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';

	export let sentences = [];
	let speed = 50;
	let currentText = '';
	let currentSentenceIndex = 0;
	let isTyping = false;

	const dispatch = createEventDispatcher();

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

	onMount(() => {
		typeWriter();
	});
</script>

<p class="pt-[3rem] {isTyping ? 'typing-cursor' : ''}" id="typewriter">
	{#each currentText as letter, index}
		<span style="animation-delay: {index * 25}ms;">{letter === ' ' ? '\u00A0' : letter}</span>
	{/each}
</p>

<style>
	#typewriter {
		display: flex;
		align-items: flex-end;
	}

	#typewriter.typing-cursor span {
		opacity: 0.3;
		animation: cat-jump 0.1s forwards;
	}

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
		border-left: 1px solid #1e1e2e;
		position: relative;
		top: -7px; /* Adjust the vertical position as per your preference */
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
