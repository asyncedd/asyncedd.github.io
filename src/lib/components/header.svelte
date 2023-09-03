<script>
	import { page } from '$app/stores';

	import Themeswitch from './header/themeswitcher.svelte';
	import Links from './header/links.svelte';

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

<div
	class="w-[100%] h-[3rem] inline-flex items-center bg-background_dark/50 saturate-150 backdrop-blur-[17px] text-foreground justify-between p-[clamp(0.5rem,0.5rem+3vw,3rem)] px-[clamp(0.3rem,0.3rem+10vw,10%)] fixed z-[9999]"
>
	<a href="/" class="inline-flex items-center gap-3 group">
		<div
			class="h-10 w-10 {$page.url.pathname === '/'
				? 'bg-foreground'
				: 'bg-foreground/50'} motion-safe:group-hover:bg-foreground rounded-[10rem] transition-[background] duration-[0.25s] ease-in-out"
		/>
		<b
			class="text-[clamp(0.7rem,_1vw+0.7rem,_1.5rem)] tracking-widest motion-safe:group-hover:text-foreground transition-[color] duration-[0.25s] ease-in-out {$page
				.url.pathname === '/'
				? 'text-foreground'
				: 'text-foreground/50'}">/ async</b
		></a
	>
	<Links {links} />
	<Themeswitch button_name="Theme" optionList={['dark', 'light']} />
</div>
