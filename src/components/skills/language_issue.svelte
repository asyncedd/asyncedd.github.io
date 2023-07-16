<div class="bento-box grid">
	<div class="bento-box-item">
		<img src="/rust.png" alt="Rust" />
	</div>
	<div class="bento-box-item">
		<img src="/lua.png" alt="Lua" />
	</div>
	<div class="bento-box-item">
		<img src="/css.png" alt="Lua" />
	</div>
</div>

<style>
	.bento-box {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		gap: 1rem;

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
