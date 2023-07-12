<script lang="ts">
	import { onMount } from 'svelte';

	let currentIndex = 0;
	let texts = ['', 'Avid ricer', '', 'The average Linux enjoyer'];
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

		if (!showCursor && i > 0) {
			showCursor = true;
			cursor.style.visibility = 'visible';
		}

		if (i === txt.length && currentIndex < texts.length - 1) {
			currentIndex++;
			if (txt === '') {
				backspaceEffect();
				return;
			}
			i = 0;
			text = '';
			setTimeout(typeWriter, 1000); // Delay between texts
			return;
		}

		if (i < txt.length + 1) {
			setTimeout(typeWriter, speed);
		}
	}

	function backspaceEffect() {
		const element = document.getElementById('demo');
		const cursor = document.getElementById('cursor');
		const txt = texts[currentIndex];
		const currentText = element.innerHTML;

		if (currentText.length > 0) {
			element.innerHTML = currentText.slice(0, -1);
			setTimeout(backspaceEffect, speed);
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

<div class="text-ctp-base m-8 text-[25px] w-[15rem] text-center">
	<div class="text-container">
		<p id="demo" />
		<span id="cursor" class="cursor" />
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
		background-color: black;
		animation: blink 1s infinite;
		visibility: hidden;
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
