<script>
	import { fade } from 'svelte/transition';

	/**
	 * @type {string}
	 */
	export let url;
</script>

{#key url}
	<div class="h-full" in:fade>
		<slot />
	</div>
{/key}
