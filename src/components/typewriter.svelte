<script lang="ts">
	import { onMount } from 'svelte';

	let sentences = [
		'GNU/Linux enjoyer',
		'Coding enthusiast',
		'Svelte fan',
		'Welcome to my website!'
	];

	let speed = 50; /* The speed/duration of the effect in milliseconds */
	let currentText = '';
	let currentSentenceIndex = 0;
	let isTyping = false;

	function typeWriter() {
		isTyping = true;
		let i = 0;
		const sentenceLength = sentences[currentSentenceIndex].length;
		const interval = setInterval(() => {
			if (i < sentenceLength) {
				currentText += sentences[currentSentenceIndex].charAt(i);
				i++;
			} else {
				clearInterval(interval);

				// Start backspacing if not on the last iteration
				if (currentSentenceIndex < sentences.length - 1) {
					isTyping = true;
					setTimeout(() => {
						const backspaceInterval = setInterval(() => {
							currentText = currentText.slice(0, -1);
							if (currentText === '') {
								clearInterval(backspaceInterval);
								// Move to the next sentence
								currentSentenceIndex++;
								if (currentSentenceIndex < sentences.length) {
									isTyping = false;
									setTimeout(() => {
										typeWriter(); // Start typing the next sentence
									}, 1000); // Delay before starting the next sentence
								}
							}
						}, speed / 2); // Adjust the backspace speed as per your preference
					}, 3000); // Delay before starting the backspace
				} else {
					setTimeout(() => {
						isTyping = false;
					}, 5000);
				}
			}
		}, speed);
	}

	onMount(() => {
		typeWriter();
	});
</script>

<p class="text-ctp-base pt-[3rem] {isTyping ? 'typing-cursor' : ''}" id="typewriter">
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
