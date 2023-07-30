/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		require('@catppuccin/tailwindcss')({
			// prefix to use, e.g. `text-pink` becomes `text-ctp-pink`.
			// default is `false`, which means no prefix
			prefix: 'ctp',
			// which flavour of colours to use by default, in the `:root`
			defaultFlavour: 'mocha'
		})
	]
};
