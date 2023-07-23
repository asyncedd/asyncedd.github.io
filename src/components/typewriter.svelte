<script lang="ts">
	import { onMount } from 'svelte';

	let i = 0;
	let txt = 'GNU/Linux enjoyer'; /* The text */
	let speed = 50; /* The speed/duration of the effect in milliseconds */

	function typeWriter() {
		if (i < txt.length) {
			document.getElementById('typewriter').innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	}

	onMount(() => {
		typeWriter();
	});
</script>
