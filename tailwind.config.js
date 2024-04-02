/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                primary: ['hel', 'sans-serif'],
                medium: ['helmed', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
