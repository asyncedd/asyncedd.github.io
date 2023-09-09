<script>
	import { page } from '$app/stores';

	export let links = [];
</script>

<ul class="hidden md:inline-flex gap-[clamp(0.5rem,0.5rem+1vw,3rem)] items-center">
	{#each links as link}
		<li>
			<a href={link.href}
				><b
					class="text-[clamp(0.7rem,_1vw+0.7rem,_1.5rem)] tracking-widest motion-safe:hover:text-foreground transition-[color] duration-[0.25s] ease-in-out {$page.url.pathname.startsWith(
						link.href
					)
						? 'text-foreground'
						: 'text-foreground/70'}">{link.name}</b
				></a
			>
		</li>
	{/each}
</ul>
