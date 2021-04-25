const colors = require('tailwindcss/colors');

module.exports = {
	purge: [ './src/**/*.vue', './src/**/*.js' ],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				primary: [ 'DM Sans', 'Arial', 'Helvetica', 'sans-serif' ],
				text: [ 'Roboto', 'sans-serif' ]
			},
			colors: {
				gray: colors.blueGray,
				black: 'var(--clr-black)',
				primary: {
					50: 'var(--clr-primary-50)',
					100: 'var(--clr-primary-100)',
					200: 'var(--clr-primary-200)',
					300: 'var(--clr-primary-300)',
					400: 'var(--clr-primary-400)',
					DEFAULT: 'var(--clr-primary)',
					600: 'var(--clr-primary-600)',
					700: 'var(--clr-primary-700)',
					800: 'var(--clr-primary-800)',
					900: 'var(--clr-primary-900)'
				},
				secondary: {
					100: 'var(--clr-secondary-100)',
					200: 'var(--clr-secondary-200)',
					300: 'var(--clr-secondary-300)',
					400: 'var(--clr-secondary-400)',
					DEFAULT: 'var(--clr-secondary)',
					600: 'var(--clr-secondary-600)',
					700: 'var(--clr-secondary-700)',
					800: 'var(--clr-secondary-800)',
					900: 'var(--clr-secondary-900)'
				}
			}
		}
	},
	variants: {
		extend: {
			backgroundColor: [ 'active' ],
			textColor: [ 'active' ]
		}
	},
	plugins: [ require('tailwindcss-debug-screens'), require('@tailwindcss/forms') ]
};
