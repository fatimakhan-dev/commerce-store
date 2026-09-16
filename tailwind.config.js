/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#f4f6ff',
                    100: '#e9eeff',
                    200: '#cbd7ff',
                    300: '#a8baff',
                    400: '#7d8ef6',
                    500: '#5a63eb',
                    600: '#4a4ad8',
                    700: '#3a39ac',
                    800: '#2d2d7e',
                    900: '#20275a',
                },
            },
            boxShadow: {
                soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
                glow: '0 20px 50px rgba(90, 99, 235, 0.25)',
            },
            backgroundImage: {
                grid: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.18) 1px, transparent 0)',
            },
        },
    },
    plugins: [],
}
