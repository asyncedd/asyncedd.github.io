<script lang="ts">
	import { page } from '$app/stores';

	type NavigationLink = {
		name: string;
		href: string;
	};

	export let links: NavigationLink[] = [];
</script>

<ul class="hidden items-center gap-[clamp(0.5rem,0.5rem+1vw,3rem)] md:inline-flex">
	{#each links as link}
		<li>
			<a href={link.href}
				><b
					class="text-[clamp(0.7rem,_1vw+0.7rem,_1.5rem)] tracking-widest transition-[color] duration-[0.25s] ease-in-out motion-safe:hover:text-foreground {$page
						.url.pathname === link.href
						? 'text-foreground'
						: 'text-foreground/70'}">{link.name}</b
				></a
			>
		</li>
	{/each}
</ul>
