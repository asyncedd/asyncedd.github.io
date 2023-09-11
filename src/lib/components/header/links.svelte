<script>
	import { page } from '$app/stores';

	/**
	 * Represents an array of navigation links.
	 *
	 * @typedef {Object} NavigationLink
	 * @property {string} name - The name or label of the navigation link.
	 * @property {string} href - The URL or path associated with the navigation link.
	 */

	/**
	 * An array of navigation links.
	 *
	 * @type {Array<NavigationLink>}
	 */
	export let links = [];
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
