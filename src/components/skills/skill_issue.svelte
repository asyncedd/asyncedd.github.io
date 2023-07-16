<div class="bento-box grid">
	<div class="bento-box-item">
		<img src="/tux.webp" alt="Linux" class="grow-on-hover" />
	</div>
	<div class="bento-box-item">
		<img src="/neovim.webp" alt="Neovim" class="grow-on-hover" />
	</div>
	<div class="bento-box-item">
		<img src="/fish.webp" alt="Fish" class="grow-on-hover" />
	</div>
	<div class="bento-box-item">
		<img src="/github.webp" alt="Github" class="grow-on-hover" />
	</div>
	<div class="bento-box-item">
		<img src="/git.webp" alt="Git" class="grow-on-hover" />
	</div>
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
</style>
