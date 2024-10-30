import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				ssr: '#fbcd74',
				sr : '#b087ff'
			}
		}
	},

	plugins: [require("daisyui"),]
} satisfies Config;
