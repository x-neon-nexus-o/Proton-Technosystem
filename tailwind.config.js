/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#e60023',        // Deep Crimson (Brand Red)
                secondary: '#0057b7',      // Proton Blue
                accent: '#0d0d0d',         // Jet Black
                lightBg: '#f7f7f7',        // Cloud White
                textPrimary: '#1c1c1c',    // Dark Slate
                glassCard: 'rgba(255,255,255,0.2)', // Frosted Glass
            },
            backgroundImage: {
                'gradient-brand': 'linear-gradient(135deg, #e60023 0%, #0057b7 100%)',
            },
            keyframes: {
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'scroll-down': {
                    '0%': { transform: 'translateY(0)', opacity: '1' },
                    '100%': { transform: 'translateY(10px)', opacity: '0' },
                },
                'slide-down': {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            },
            animation: {
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
                'scroll-down': 'scroll-down 1.5s infinite',
                'pulse-slow': 'pulse 3s infinite',
                'slide-down': 'slide-down 0.3s ease-out forwards',
                'marquee': 'marquee 25s linear infinite',
            }
        },
    },
    plugins: [],
}
