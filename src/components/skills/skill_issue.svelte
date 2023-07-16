<div class="bento-box grid">
	<div class="bento-box-item">
		<img src="/Tux.svg.png" alt="Linux" />
	</div>
	<div class="bento-box-item">
		<img src="/neovim.png" alt="Neovim" />
	</div>
</div>

<style>
	.bento-box {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		gap: 1rem;
		grid-template-areas:
			'a  b  c  d'
			'l  🌟 🌟 e'
			'k  🌟 🌟 f'
			'j  i  h  g';

		grid-template-rows: repeat(auto-fit, minmax(120px, 1fr));
		grid-template-columns: 120px auto auto 120px;

		--stagger-delay: 100ms;
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

	.bento-box-item img {
		max-width: 100%;
		max-height: 100%;
	}
</style>
