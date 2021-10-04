// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                'sm': { 'min': '360px', 'max': '412px' },
                'md': { 'min': '600px', 'max': '810px' },
                'lg': { 'min': '811px', 'max': '1368px' }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}