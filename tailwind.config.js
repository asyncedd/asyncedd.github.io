const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: 'rgb(var(--color-background) / <alpha-value>)',
				background_light: 'rgb(var(--color-background_light) / <alpha-value>)',
				background_lighter: 'rgb(var(--color-background_lighter) / <alpha-value>)',
				background_dark: 'rgb(var(--color-background_dark) / <alpha-value>)',
				foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
				foreground_dark: 'rgb(var(--color-foreground_dark) / <alpha-value>)',
				accent: 'rgb(var(--color-accent) / <alpha-value>)',
				links: 'rgb(var(--color-links) / <alpha-value>)'
			},
			typography: ({ theme }) => ({
				as: {
					css: {
						'--tw-prose-body': theme('colors.background_dark'),
						'--tw-prose-headings': theme('colors.foreground'),
						'--tw-prose-lead': theme('colors.pink[700]'),
						'--tw-prose-links': theme('colors.blue[500]'),
						'--tw-prose-bold': theme('colors.background_dark'),
						'--tw-prose-counters': theme('colors.pink[600]'),
						'--tw-prose-bullets': theme('colors.background_dark'),
						'--tw-prose-hr': theme('colors.pink[300]'),
						'--tw-prose-quotes': theme('colors.pink[900]'),
						'--tw-prose-quote-borders': theme('colors.pink[300]'),
						'--tw-prose-captions': theme('colors.pink[700]'),
						'--tw-prose-code': theme('colors.background_dark'),
						'--tw-prose-pre-code': theme('colors.zinc[100]'),
						'--tw-prose-pre-bg': theme('colors.zinc[700]'),
						'--tw-prose-th-borders': theme('colors.background_dark'),
						'--tw-prose-td-borders': theme('colors.foreground')
					}
				}
			}),
			fontFamily: {
				sans: ['Montserrat', defaultTheme.fontFamily.sans],
				mono: ['Fira Code', defaultTheme.fontFamily.mono]
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
