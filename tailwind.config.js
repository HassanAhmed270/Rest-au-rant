/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Raleway', 'sans-serif'],
        accent: ['Oswald', 'sans-serif'],
      },
      colors: {
        ember: {
          50: '#fff4ed',
          100: '#ffe6d0',
          200: '#ffc99a',
          300: '#ffa463',
          400: '#ff7a2f',
          500: '#ff5a0a',
          600: '#f03d00',
          700: '#c72c02',
          800: '#9e250a',
          900: '#7f220d',
        },
        coal: {
          50: '#f6f5f4',
          100: '#e8e5e3',
          200: '#d3ccc8',
          300: '#b5aaa3',
          400: '#948478',
          500: '#7d6c60',
          600: '#6b5b50',
          700: '#594b42',
          800: '#4c4039',
          900: '#433834',
          950: '#1a1410',
        },
        smoke: {
          900: '#0f0d0b',
          800: '#1a1612',
          700: '#231e18',
          600: '#2e2720',
          500: '#3a3028',
        },
      },
      backgroundImage: {
        'flame-gradient': 'linear-gradient(135deg, #ff5a0a 0%, #c72c02 50%, #7f220d 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0f0d0b 0%, #1a1612 100%)',
        'ember-glow': 'radial-gradient(ellipse at center, rgba(255,90,10,0.15) 0%, transparent 70%)',
      },
      animation: {
        'flicker': 'flicker 3s ease-in-out infinite',
        'rise': 'rise 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'ember': '0 0 30px rgba(255, 90, 10, 0.3)',
        'ember-lg': '0 0 60px rgba(255, 90, 10, 0.2)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(255, 90, 10, 0.25)',
      },
    },
  },
  plugins: [],
}
