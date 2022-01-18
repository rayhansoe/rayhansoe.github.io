module.exports = {
	mode: 'jit',
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		screens: {
			'2xs': '375px',
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			zIndex: {
				0: '0',
			},
			colors: {
				'dark-mode': '#343439',
				'text-dark': '#111111',
				'text-light': '#FFFEFC',
				'primary-color': '#E16259',
			},
			fontFamily: {
				averia: ['Averia Libre'],
				body: ['Inter'],
			},
		},
	},
	plugins: [],
}
