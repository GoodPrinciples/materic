/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					light: '#FFA37A',
					DEFAULT: '#F26527',
					dark: '#CA460A'
				},
				'primary-text': '#FFFFFF'
			}
		}
	},
	plugins: []
};
