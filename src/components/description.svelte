<script lang="ts">
	import { onMount } from 'svelte';

	let i = 0;
	const speed = 50; /* The speed/duration of the effect in milliseconds */
	let text = '';
	let showCursor = false;

	function typeWriter() {
		const element = document.getElementById('demo');
		const cursor = document.getElementById('cursor');
		const txt = element.dataset.value;
		if (i < txt.length) {
			text += txt.charAt(i);
			element.innerHTML = text;
			i++;
		}

		if (!showCursor && i > 0) {
			showCursor = true;
			cursor.style.visibility = 'visible';
		}

		if (i < txt.length + 1) {
			setTimeout(typeWriter, speed);
		}
	}

	onMount(() => {
		typeWriter();
	});
</script>

<style>
	.text-container {
		position: relative;
		display: inline-block;
	}

	.cursor {
		position: absolute;
		left: 100%;
		top: 0.1em;
		width: 1px;
		height: 1em;
		background-color: black;
		animation: blink 0.7s infinite;
		visibility: hidden;
	}

	@keyframes blink {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>

<div class="text-ctp-base m-8 text-[25px] w-[15rem] text-center">
	<div class="text-container">
		<p id="demo" data-value="Ricer"></p>
		<span id="cursor" class="cursor"></span>
	</div>
</div>
