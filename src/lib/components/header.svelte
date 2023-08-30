<script>
	import { page } from '$app/stores';
	import Themeswitch from '$lib/components/themeswitcher.svelte';

	let links = [
		{
			name: '/blog',
			href: '/blog'
		},
		{
			name: '/snippet',
			href: '/snippet'
		}
	];
</script>

<nav class="w-[100%] h-[3rem] flex mb-[2.5rem]">
	<div
		class="w-[100%] h-[3rem] inline-flex items-center bg-background_dark/50 saturate-150 backdrop-blur-3xl text-foreground justify-between p-[clamp(0.5rem,0.5rem+3vw,3rem)] px-[clamp(0.3rem,0.3rem+10vw,10%)] fixed"
	>
		<a href="/" class="inline-flex items-center gap-3 group">
			<div
				class="h-10 w-10 {$page.url.pathname === '/'
					? 'bg-foreground'
					: 'bg-foreground/75'} motion-safe:group-hover:bg-foreground rounded-[10rem] transition-[background] duration-[0.25s] ease-in-out"
			/>
			<b
				class="text-[clamp(0.7rem,_1vw+0.7rem,_1.5rem)] tracking-widest motion-safe:group-hover:text-foreground transition-[color] duration-[0.25s] ease-in-out {$page
					.url.pathname === '/'
					? 'text-foreground'
					: 'text-foreground/75'}">/ async</b
			></a
		>
		<ul class="hidden md:inline-flex gap-[clamp(0.5rem,0.5rem+1vw,3rem)] items-center">
			{#each links as link}
				<li>
					<a href={link.href}
						><b
							class="text-[clamp(0.7rem,_1vw+0.7rem,_1.5rem)] tracking-widest motion-safe:hover:text-foreground transition-[color] duration-[0.25s] ease-in-out {$page.url.pathname.startsWith(
								link.href
							)
								? 'text-foreground'
								: 'text-foreground/75'}">{link.name}</b
						></a
					>
				</li>
			{/each}
		</ul>
		<Themeswitch button_name="Theme" optionList={['dark', 'light']} />
	</div>
</nav>
