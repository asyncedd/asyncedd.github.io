<script>
	import { fade } from 'svelte/transition';

	/**
	 * @type {string}
	 */
	export let url;
</script>

{#key url}
	<div class="h-[100%]" in:fade>
		<slot />
	</div>
{/key}
