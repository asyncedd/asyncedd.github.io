import { variants } from '@catppuccin/palette';
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			typography: ({ theme }) => ({
				'ctp-dark': {
					css: {
						'--tw-prose-body': variants.mocha.overlay2.hex,
						'--tw-prose-headings': variants.mocha.text.hex,
						'--tw-prose-lead': theme('colors.pink[700]'),
						'--tw-prose-links': variants.mocha.blue.hex,
						'--tw-prose-bold': variants.mocha.red.hex,
						'--tw-prose-counters': theme('colors.pink[600]'),
						'--tw-prose-bullets': theme('colors.pink[400]'),
						'--tw-prose-hr': theme('colors.pink[300]'),
						'--tw-prose-quotes': theme('colors.pink[900]'),
						'--tw-prose-quote-borders': theme('colors.pink[300]'),
						'--tw-prose-captions': theme('colors.pink[700]'),
						'--tw-prose-code': variants.mocha.overlay0.hex,
						'--tw-prose-pre-code': theme('colors.pink[100]'),
						'--tw-prose-pre-bg': theme('colors.pink[900]'),
						'--tw-prose-th-borders': variants.mocha.surface0.hex,
						'--tw-prose-td-borders': variants.mocha.surface1.hex
					}
				},
				'ctp-light': {
					css: {
						'--tw-prose-body': variants.mocha.surface2.hex,
						'--tw-prose-headings': variants.mocha.base.hex,
						'--tw-prose-lead': theme('colors.pink[700]'),
						'--tw-prose-links': variants.latte.blue.hex,
						'--tw-prose-bold': variants.latte.red.hex,
						'--tw-prose-counters': theme('colors.pink[600]'),
						'--tw-prose-bullets': theme('colors.pink[400]'),
						'--tw-prose-hr': theme('colors.pink[300]'),
						'--tw-prose-quotes': theme('colors.pink[900]'),
						'--tw-prose-quote-borders': theme('colors.pink[300]'),
						'--tw-prose-captions': theme('colors.pink[700]'),
						'--tw-prose-code': variants.mocha.surface1.hex,
						'--tw-prose-pre-code': theme('colors.pink[100]'),
						'--tw-prose-pre-bg': theme('colors.pink[900]'),
						'--tw-prose-th-borders': variants.latte.surface2.hex,
						'--tw-prose-td-borders': variants.latte.surface1.hex
					}
				}
			}),
			fontFamily: {
				mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono]
			}
		}
	},
	plugins: [
		require('@catppuccin/tailwindcss')({
			// prefix to use, e.g. `text-pink` becomes `text-ctp-pink`.
			// default is `false`, which means no prefix
			prefix: 'ctp',
			// which flavour of colours to use by default, in the `:root`
			defaultFlavour: 'mocha'
		}),
		require('@tailwindcss/typography')
	]
};
