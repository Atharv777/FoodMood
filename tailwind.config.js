module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#a78bfa',
                    DEFAULT: '#8b5cf6',
                    dark: '#6d28d9'
                },
                pink: {
                    light: '#fbe0dc',
                    DEFAULT: '#ffd3cc',
                    dark: '#fcc6bd'
                },
            },
        },
        fontFamily: {
            'lobster': ['Lobster'],
            'reenie': ['"Reenie Beanie"'],
            'exo': ['"Exo 2"']
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}