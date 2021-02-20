const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        fontFamily: {
            sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        },
        colors: {
            black: '#181818',
            'black-light': '#333',
            primary: '#07f',
            'primary-lighter': '#0295FF',
            'primary-dark': '#04f'
        },
        // backgroundColor: {
        //     primary: '#07f',
        //     'primary-lighter': '#0295FF',
        // },
        // textColor: {
        //     primary: '#07f',
        //     'primary-lighter': '##0295FF',
        // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
