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
	class="sticky top-0 z-[9999] inline-flex h-[3rem] w-[100%] items-center justify-between bg-background_dark/50 p-[clamp(0.5rem,0.5rem+3vw,3rem)] px-[3rem] text-foreground saturate-150 backdrop-blur-[17px]"
>
	<a href="/" class="group inline-flex items-center gap-3">
		<div
			class="h-10 w-10 {$page.url.pathname === '/'
				? 'bg-foreground/[.85]'
				: 'bg-foreground/70'} rounded-[10rem] transition-[background] duration-[0.25s] ease-in-out motion-safe:group-hover:bg-foreground"
		/>
		<b
			class="text-[clamp(0.7rem,_1vw+0.7rem,_1.5rem)] tracking-widest transition-[color] duration-[0.25s] ease-in-out motion-safe:group-hover:text-foreground {$page
				.url.pathname === '/'
				? 'text-foreground/[.85]'
				: 'text-foreground/70'}">/ async</b
		></a
	>
	<Links {links} />
	<Themeswitch button_name="Theme" optionList={['dark', 'light']} />
</div>
