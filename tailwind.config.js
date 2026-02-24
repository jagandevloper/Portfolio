/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#3b82f6', // Bright Blue
                    dark: '#1e40af',
                },
                secondary: {
                    DEFAULT: '#10b981', // Emerald for "Success/Cloud" vibes
                    dark: '#047857',
                },
                dark: {
                    bg: '#0f172a', // Slate-900
                    card: '#1e293b', // Slate-800
                    text: '#f8fafc', // Slate-50
                    muted: '#94a3b8', // Slate-400
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
