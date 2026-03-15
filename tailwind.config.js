/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        condensed: ['Barlow Condensed', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        blue: {
          50:  '#e8f1fc',
          100: '#cce0f8',
          400: '#4d9ee8',
          500: '#2980d9',
          600: '#1a6fd4',
          700: '#1459b0',
          800: '#0f4a9a',
          900: '#0a3070',
          950: '#060e2a',
        },
        ink: '#0a0e1a',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'counter': 'counter 2s ease forwards',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
