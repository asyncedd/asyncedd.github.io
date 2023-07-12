<script lang="ts">
	import { onMount } from 'svelte';

	let i = 0;
	const speed = 50; /* The speed/duration of the effect in milliseconds */

	function typeWriter() {
		let element = document.getElementById('demo');
		let txt = element.dataset.value;
		if (i < txt.length) {
			element.innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	}

	onMount(() => {
		typeWriter();
	});
</script>

<div class="text-ctp-base m-8 text-[25px] w-[15rem] text-center">
	<p id="demo" data-value="Ricer">&nbsp;</p>
</div>
