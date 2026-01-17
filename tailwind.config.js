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
          teal: '#66FCF1',
          tealDark: '#45A29E',
          silver: '#C5C6C7',
        },
        dark: {
          bg: '#0B0C10',
          surface: '#1F2833',
          card: '#1F2833',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'rotate-3d': 'rotate3d 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 107, 107, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 0, 255, 0.8), 0 0 30px rgba(0, 245, 255, 0.6)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', boxShadow: '0 0 20px rgba(255, 107, 107, 0.4)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(255, 0, 255, 0.8)' },
        },
        rotate3d: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '50%': { transform: 'rotateX(180deg) rotateY(180deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
