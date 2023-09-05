<script lang="ts">
	import { fade } from 'svelte/transition';

	export let url: string;
</script>

{#key url}
	<div class="h-[100%]" in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration: 300 }}>
		<slot />
	</div>
{/key}
