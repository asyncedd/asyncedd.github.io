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
  import FrameworkIssue from '../components/skills/framework_issue.svelte';
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
  <div class="flex justify-center p-6 md:p-3 lg:p-1.5">
    <h1
      data-value="Langs"
      class="m-2 md:m-4 lg:m-6 w-50 md:w-64 lg:w-80 text-4xl md:text-6xl lg:text-10xl"
    >
      Langs
    </h1>
    <h1
      data-value="Frames"
      class="m-2 md:m-4 lg:m-6 w-50 md:w-60 lg:w-80 text-4xl md:text-6xl lg:text-10xl"
    >
      Frames
    </h1>
    <h1
      data-value="Tools"
      class="m-2 md:m-4 lg:m-6 w-50 md:w-64 lg:w-80 text-4xl md:text-6xl lg:text-10xl"
    >
      Tools
    </h1>
  </div>
  <div class="flex justify-center">
    <div class="m-4 md:md-4 lg:m-6 p-4 md:p-8 lg:p-16" style="padding-right: 0.5rem; padding-left: 0.5rem;">
      <LanguageIssue />
    </div>
    <div class="m-4 md:md-4 lg:m-6 p-4 md:p-8 lg:p-16" style="padding-right: 1rem; padding-left: 1rem;">
      <FrameworkIssue />
    </div>
    <div class="m-4 md:md-4 lg:m-6 p-4 md:p-8 lg:p-16" style="padding-right: 0.5rem; padding-left: 0.5rem;">
      <SkillIssue />
    </div>
  </div>
  <div class="p-16" />
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
