<script>
	import { fly } from 'svelte/transition';
</script>

<ul
	in:fly={{
		y: -15
	}}
	out:fly={{
		y: -15
	}}
	class="absolute -ml-[3rem] mt-[0.5rem] w-[7rem] flex-col rounded-[0.5rem] border-[1px] border-background_light bg-background_dark"
	id="theme-select"
>
	<slot />
</ul>
