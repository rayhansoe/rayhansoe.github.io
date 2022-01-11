module.exports = {
	mode: 'jit',
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			zIndex: {
				0: '0',
			},
			colors: {
				'dark-mode': '#343439',
			},
		},
	},
	plugins: [],
}
