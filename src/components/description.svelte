<script lang="ts">
	import { onMount } from 'svelte';

	let i = 0;
	const speed = 50; /* The speed/duration of the effect in milliseconds */
	let text = '';
	let cursorVisible = true;

	function typeWriter() {
		const element = document.getElementById('demo');
		const cursor = document.getElementById('cursor');
		const txt = element.dataset.value;
		if (i < txt.length) {
			text += txt.charAt(i);
			element.innerHTML = text;
			i++;
		} else {
			cursorVisible = false;
		}

		cursorVisible = !cursorVisible;
		cursor.style.visibility = cursorVisible ? 'visible' : 'hidden';

		if (i < txt.length + 1) {
			setTimeout(typeWriter, speed);
		}
	}

	onMount(() => {
		typeWriter();
	});
</script>

<div class="text-ctp-base m-8 text-[25px] w-[15rem] text-center">
	<div class="text-container">
		<p id="demo" data-value="Ricer" />
		<span id="cursor" class="cursor" />
	</div>
</div>

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
