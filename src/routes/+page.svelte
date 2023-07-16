<script lang="ts">
	import Hackerman from '../components/hackerman.svelte';
	import Wave from '../components/wave.svelte';
	import Font from '../components/fonts.svelte';
	import Popup from '../components/popup.svelte';
	import Lorem from '../components/lorem.svelte';
	import Footer from '../components/footer.svelte';
	import Navbar from '../components/navbar.svelte';
	import Header from '../components/header.svelte';
	import DividersPacman from '../components/dividers/pacman.svelte';
	import SkillIssue from '../components/skills/skill_issue.svelte';
	import LanguageIssue from '../components/skills/language_issue.svelte';
	import { theme } from '../components/navbar.svelte';
	import '@fontsource/jetbrains-mono';
</script>

<svelte:head>
	<title>async</title>
</svelte:head>

<Navbar />

<Popup />

<Font />

<Hackerman />

<body class="bg-ctp-base {$theme} scroll-smooth" style="overflow: hidden visible;">
	<div class="bg-ctp-blue">
		<Header />
	</div>
	<Wave />
	<div class="p-[5rem]" />
	<div class="flex items-center justify-center">
		<div class="flex items-center justify-center p-[5rem] text-[5rem]">
			<h1 data-value="Skills" class="w-[20rem] text-center">Skills</h1>
		</div>
	</div>
	<div class="flex justify-center p-[3rem]">
		<h1 data-value="Langs" class="m-8 w-[17rem] text-[5rem]">Langs</h1>
		<h1 data-value="Tools" class="m-8 w-[17rem] text-[5rem]">Tools</h1>
	</div>
	<div class="flex justify-center">
		<div class="w-[80%]">
			<div class="flex justify-center">
				<div>
					<LanguageIssue />
				</div>
				<div>
					<SkillIssue />
				</div>
			</div>
		</div>
	</div>
	<DividersPacman />
	<div class="flex items-center justify-center p-[3rem]">
		<h1 data-value="Lorem" class="m-8 w-[20rem] text-[5rem]" style="white-space: nowrap;">Lorem</h1>
	</div>
	<Lorem />
</body>
<Footer />

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	body {
		@apply m-[0rem] bg-ctp-base;
		font-family: 'JetBrains Mono', monospace;
	}

	h1 {
		@apply rounded-[10px] bg-ctp-blue text-center;
		transition: transform 500ms ease;
	}

	h1:hover {
		@apply bg-ctp-base text-ctp-green;
		transform: scale(1.1);
	}
</style>
