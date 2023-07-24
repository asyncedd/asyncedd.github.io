<script lang="ts">
	import { onMount } from 'svelte';

	let txt = 'GNU/Linux enjoyer'; /* The text */
	let speed = 50; /* The speed/duration of the effect in milliseconds */
	let currentText = '';
	let isTyping = false;

	function typeWriter() {
		isTyping = true;
		let i = 0;
		const interval = setInterval(() => {
			if (i < txt.length) {
				currentText += txt.charAt(i);
				i++;
			} else {
				clearInterval(interval);
				setTimeout(() => {
					isTyping = false;
				}, 3000);
			}
		}, speed);
	}

	onMount(() => {
		typeWriter();
	});
</script>

<p class="text-ctp-base pt-[3rem] {isTyping ? 'typing-cursor' : ''}" id="typewriter">
	{currentText}
</p>

<style>
	#typewriter.typing-cursor::after {
		content: '';
		height: 1rem;
		border-left: 1px solid #1e1e2e;
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
