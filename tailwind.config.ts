import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {
				'brand-foreground': 'var(--foreground-scheme)',
				'brand-background': 'var(--background-scheme)',
				'brand-salt': 'var(--clr-salt)',
				'brand-pepper': 'var(--clr-pepper)',
				'brand-link': 'var(--clr-link)'
			}
		}
	},
	plugins: []
}
export default config
