import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDF8',
          100: '#FFF8EE',
          200: '#FFF0DC',
          300: '#FFE5C4',
        },
        blush: {
          50: '#FFF0F3',
          100: '#FFE0E8',
          200: '#FFC2D1',
          300: '#FFA0B8',
          400: '#FF7DA0',
          500: '#F45B83',
          600: '#E03668',
        },
        rose: {
          soft: '#FBCFE8',
          warm: '#F9A8D4',
          deep: '#E879A0',
          accent: '#BE185D',
        },
        petal: '#FFD6E0',
        lilac: '#E8D5F5',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'float-fast': 'float 3.5s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'candle': 'candle 1.5s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(0.97)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
          '50%': { opacity: '0.6', transform: 'scale(1.2) rotate(15deg)' },
        },
        candle: {
          '0%, 100%': { transform: 'scaleX(1) translateY(0)' },
          '25%': { transform: 'scaleX(0.85) translateY(-2px)' },
          '75%': { transform: 'scaleX(1.1) translateY(1px)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1.15)' },
          '30%': { transform: 'scale(1)' },
          '45%': { transform: 'scale(1.08)' },
          '60%': { transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(244, 91, 131, 0.12)',
        'glow': '0 0 30px rgba(244, 91, 131, 0.25)',
        'card': '0 2px 20px rgba(180, 100, 120, 0.08)',
        'love': '0 0 60px rgba(244, 91, 131, 0.3)',
      },
    },
  },
  plugins: [],
}

export default config
