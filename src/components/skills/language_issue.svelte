<div class="bento-box grid">
	<div class="bento-box-item">
		<img src="/rust.webp" alt="Rust" class="grow-on-hover" loading="lazy" decoding="async" />
	</div>
	<div class="bento-box-item">
		<img src="/lua.webp" alt="Lua" class="grow-on-hover" loading="lazy" decoding="async" />
	</div>
	<div class="bento-box-item">
		<img src="/css.webp" alt="CSS" class="grow-on-hover" loading="lazy" decoding="async" />
	</div>
	<div class="bento-box-item">
		<img src="/html.webp" alt="HTML" class="grow-on-hover" loading="lazy" decoding="async" />
	</div>
	<div class="bento-box-item">
		<img src="/typescript.webp" alt="Typescript" class="grow-on-hover" loading="lazy" decoding="async" />
	</div>
	<div class="bento-box-item">
		<img
			src="/javascript.webp"
			alt="Javascript"
			style="border-radius: 10px;"
			class="the-worst-and-best-programming-language-of-all-time"
			loading="lazy"
			decoding="async"
		/>
	</div>
	<div class="bento-box-item">
		<img src="/C++.webp" alt="C++" class="grow-on-hover" loading="lazy" decoding="async" />
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

	.bento-box-item:hover {
		@apply bg-ctp-surface2;
	}

	.bento-box-item .grow-on-hover {
		transition: transform 0.3s;
	}

	.bento-box-item .grow-on-hover:hover {
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
