<script lang="ts">
	import { onMount } from 'svelte';

	let i = 0;
	let txt = 'GNU/Linux enjoyer'; /* The text */
	let speed = 50; /* The speed/duration of the effect in milliseconds */

	function typeWriter() {
		if (i < txt.length) {
			document.getElementById('typewriter').classList.add('typing-cursor');
			document.getElementById('typewriter').innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		} else {
			// Typing is finished, remove cursor
			document.getElementById('typewriter').classList.add('typing-cursor');
			setTimeout(() => {
				document.getElementById('typewriter').classList.remove('typing-cursor');
			}, 3000);
		}
	}

	onMount(() => {
		typeWriter();
	});
</script>

<p class="text-ctp-base pt-[3rem] typing-cursor" id="typewriter" />

<style>
	.typing-cursor {
		position: relative;
	}

	.typing-cursor::after {
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
