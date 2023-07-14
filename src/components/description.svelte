<script lang="ts">
	import { onMount } from 'svelte';

	let currentIndex = 0;
	let texts = ['Avid ricer', 'The average Linux enjoyer', '🇺🇦 Ukraine foreva'];

	const result: string[] = [];
	for (let i = 0; i < texts.length; i++) {
		result.push(texts[i]);
		result.push('');
	}

	// Remove the last empty string if needed
	if (texts.length > 0) {
		result.pop();
	}

	texts = result;

	let i = 0;
	const speed = 50; /* The speed/duration of the effect in milliseconds */
	let text = '';
	let showCursor = false;

	function typeWriter() {
		const element = document.getElementById('demo');
		const cursor = document.getElementById('cursor');
		const txt = texts[currentIndex];

		if (i < txt.length) {
			text += txt.charAt(i);
			element.innerHTML = text;
			i++;
		}

		if (i === txt.length && currentIndex < texts.length - 1) {
			currentIndex++;
			if (txt === '') {
				backspaceEffect();
				cursor.style.visibility = 'hidden';
				return;
			}
			i = 0;
			text = '';
			setTimeout(typeWriter, 1000); // Delay between texts
			return;
		}

		if (i < txt.length + 1) {
			setTimeout(typeWriter, speed);
		} else {
			cursor.style.visibility = 'hidden';
		}
	}

	function backspaceEffect() {
		const element = document.getElementById('demo');
		const cursor = document.getElementById('cursor');
		const currentText = element.innerHTML;

		if (currentText.length > 0) {
			element.innerHTML = currentText.slice(0, -1);
			setTimeout(backspaceEffect, speed);
			cursor.style.visibility = 'visible';
		} else {
			showCursor = false;
			cursor.style.visibility = 'hidden';
			i = 0;
			text = '';
			setTimeout(typeWriter, 1000); // Delay between texts
		}
	}

	onMount(() => {
		typeWriter();
	});
</script>

<div class="m-8 text-center text-[25px] text-ctp-base">
	<div class="text-container">
		<p id="demo" class="text-center" />
		<span id="cursor" class="cursor bg-ctp-base" />
	</div>
</div>

<style>
	.text-container {
		position: relative;
		display: inline-block;
		white-space: nowrap;
	}

	.cursor {
		position: absolute;
		left: 100%;
		top: 50%;
		transform: translateY(-50%);
		width: 1px;
		height: 1em;
		animation: blink 1s infinite;
	}

	@keyframes blink {
		0% {
			opacity: 1;
			height: 1em;
		}
		50% {
			opacity: 0;
			height: 0;
		}
		100% {
			opacity: 1;
			height: 1em;
		}
	}
</style>
