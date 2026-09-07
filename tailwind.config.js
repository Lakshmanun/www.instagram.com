/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0c1014',
          sidebar: '#080b0f',
          input: '#12171e',
          'input-border': '#263140',
          'input-focus': '#1877f2',
          button: '#0064e0',
          'button-hover': '#1877f2',
          'button-disabled': '#103459',
          'button-disabled-text': '#527599',
          'fb-btn': '#152132',
          'fb-btn-hover': '#1c2d44',
          'text-primary': '#f5f5f5',
          'text-secondary': '#8e9aa8',
          'border-subtle': '#1e2631',
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
