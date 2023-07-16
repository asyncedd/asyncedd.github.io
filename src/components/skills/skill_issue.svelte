<script>
  const items = [
    { name: 'Linux', src: '/tux.webp' },
    { name: 'Neovim', src: '/neovim.webp' },
    { name: 'Fish', src: '/fish.webp' },
    { name: 'Github', src: '/github.webp' },
    { name: 'Git', src: '/git.webp' },
    { name: 'Sveltekit', src: '/sveltekit.webp' },
    { name: 'Clangd', src: '/clangd.webp' },
    { name: 'Nix', src: '/nixos.webp' },
    { name: 'Prettier', src: '/prettier.webp', className: 'the-worst-and-best-programming-language-of-all-time' },
  ];
</script>

<div class="bento-box grid gap-4 sm:grid-cols-2 md:grid-cols-3">
  {#each items as item}
    <div class="bento-box-item">
      <img src={item.src} alt={item.name} class="grow-on-hover" loading="lazy" decoding="async" class:tw={item.className} />
    </div>
  {/each}
</div>

<style>
	.bento-box {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(3, auto);
		grid-template-rows: repeat(2, auto);
	}

	.bento-box-item {
		width: 100px;
		height: 100px;
		@apply bg-ctp-surface1;
		border-radius: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background-color 0.3s;
	}

	.bento-box-item:hover {
		@apply bg-ctp-surface2;
	}

	.grow-on-hover {
		transition: transform 0.3s;
	}

	.grow-on-hover:hover {
		transform: scale(1.1);
	}

	.bento-box-item img {
		max-width: 100%;
		max-height: 100%;
	}

	.the-worst-and-best-programming-language-of-all-time:hover {
		transform: scale(0.95);
	}

	.the-worst-and-best-programming-language-of-all-time {
		transform: scale(0.85);
		transition: transform 0.3s;
	}
</style>
