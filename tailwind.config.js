const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.{js,jsx,ts,tsx}',
    ],
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
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],
}
