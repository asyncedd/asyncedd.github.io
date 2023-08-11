import { variants } from '@catppuccin/palette';

/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			typography: ({ theme }) => ({
				dark: {
					css: {
						'--tw-prose-body': theme('colors.zinc[400]'),
						'--tw-prose-headings': theme('colors.zinc[50]'),
						'--tw-prose-lead': theme('colors.pink[700]'),
						'--tw-prose-links': theme('colors.blue[300]'),
						'--tw-prose-bold': theme('colors.zinc[300]'),
						'--tw-prose-counters': theme('colors.pink[600]'),
						'--tw-prose-bullets': theme('colors.zinc[500]'),
						'--tw-prose-hr': theme('colors.pink[300]'),
						'--tw-prose-quotes': theme('colors.pink[900]'),
						'--tw-prose-quote-borders': theme('colors.pink[300]'),
						'--tw-prose-captions': theme('colors.pink[700]'),
						'--tw-prose-code': theme('colors.zinc[100]'),
						'--tw-prose-pre-code': theme('colors.zinc[100]'),
						'--tw-prose-pre-bg': theme('colors.zinc[700]'),
						'--tw-prose-th-borders': theme('colors.zinc[500]'),
						'--tw-prose-td-borders': theme('colors.zinc[400]')
					}
				},
				light: {
					css: {
						'--tw-prose-body': theme('colors.zinc[700]'),
						'--tw-prose-headings': theme('colors.zinc[950]'),
						'--tw-prose-lead': theme('colors.pink[700]'),
						'--tw-prose-links': theme('colors.blue[500]'),
						'--tw-prose-bold': theme('colors.zinc[800]'),
						'--tw-prose-counters': theme('colors.pink[600]'),
						'--tw-prose-bullets': theme('colors.zinc[500]'),
						'--tw-prose-hr': theme('colors.pink[300]'),
						'--tw-prose-quotes': theme('colors.pink[900]'),
						'--tw-prose-quote-borders': theme('colors.pink[300]'),
						'--tw-prose-captions': theme('colors.pink[700]'),
						'--tw-prose-code': theme('colors.zinc[800]'),
						'--tw-prose-pre-code': theme('colors.zinc[100]'),
						'--tw-prose-pre-bg': theme('colors.zinc[500]'),
						'--tw-prose-th-borders': theme('colors.zinc[600]'),
						'--tw-prose-td-borders': theme('colors.zinc[500]')
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
