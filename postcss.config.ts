export default {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
		...(process.env.NODE_ENV != 'dev' ? { cssnano: {} } : {}),
		...(process.env.NODE_ENV != 'dev'
			? require('@fullhuman/postcss-purgecss')({
					content: ['./**/*.html']
			  })
			: null)
	}
};
