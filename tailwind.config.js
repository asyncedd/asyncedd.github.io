import { variants } from '@catppuccin/palette';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--color-primary) / <alpha-value>)',
				primary_dark: 'rgb(var(--color-primary_dark) / <alpha-value>)',
				content: 'rgb(var(--color-content) / <alpha-value>)',
				content_dark: 'rgb(var(--color-content_dark) / <alpha-value>)',
				as_teal: 'var(--color-teal / <alpha-value>)',
				as_sky: 'var(--color-sky) / <alpha-value>',
				as_blue: 'var(--color-blue) / <alpha-value>',
				as_violet: 'var(--color-violet) / <alpha-value>',
				as_zinc: 'var(--color-zinc) / <alpha-value>'
			},
			typography: ({ theme }) => ({
				as: {
					css: {
						'--tw-prose-body': theme('colors.content_dark'),
						'--tw-prose-headings': theme('colors.content'),
						'--tw-prose-lead': theme('colors.pink[700]'),
						'--tw-prose-links': theme('colors.blue[500]'),
						'--tw-prose-bold': theme('colors.content_dark'),
						'--tw-prose-counters': theme('colors.pink[600]'),
						'--tw-prose-bullets': theme('colors.content_dark'),
						'--tw-prose-hr': theme('colors.pink[300]'),
						'--tw-prose-quotes': theme('colors.pink[900]'),
						'--tw-prose-quote-borders': theme('colors.pink[300]'),
						'--tw-prose-captions': theme('colors.pink[700]'),
						'--tw-prose-code': theme('colors.content_dark'),
						'--tw-prose-pre-code': theme('colors.zinc[100]'),
						'--tw-prose-pre-bg': theme('colors.zinc[700]'),
						'--tw-prose-th-borders': theme('colors.content_dark'),
						'--tw-prose-td-borders': theme('colors.content')
					}
				}
			})
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		plugin(({ addVariant }) => {
			addVariant('dark', '&.dark');
			addVariant('mocha', '&.mocha');
		})
	]
};
