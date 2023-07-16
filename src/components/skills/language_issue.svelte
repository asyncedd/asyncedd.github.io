<div class="bento-box grid">
	<div class="bento-box-item">
		<img src="/rust.webp" alt="Rust" class="grow-on-hover" />
	</div>
	<div class="bento-box-item">
		<img src="/lua.webp" alt="Lua" class="grow-on-hover" />
	</div>
	<div class="bento-box-item">
		<img src="/css.webp" alt="CSS" class="grow-on-hover" />
	</div>
	<div class="bento-box-item">
		<img src="/html.webp" alt="HTML" class="grow-on-hover" />
	</div>
	<div class="bento-box-item">
		<img src="/tailwindcss.webp" alt="Tailwind" class="grow-on-hover" />
	</div>
	<div class="bento-box-item">
		<img src="/svelte.webp" alt="Svelte" class="grow-on-hover" />
	</div>
</div>

<style>
	.bento-box {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(2, auto);
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
</style>
