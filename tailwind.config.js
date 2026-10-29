/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F3EC',
        lavender: {
          50: '#F6F2FF',
          100: '#ECE3FF',
          200: '#D9C9FF',
          300: '#C0A8FF',
          400: '#A88BFF',
          500: '#8B6BEE',
          600: '#6F4FD1',
          700: '#5439B5',
          800: '#3B2A8C',
          900: '#281F66',
        },
        midnight: {
          50: '#1E2148',
          100: '#171A3C',
          200: '#11142E',
          300: '#0B0E22',
          400: '#080A1A',
          500: '#050714',
          600: '#030510',
        },
        plum: {
          400: '#B98BD9',
          500: '#9B6BBF',
          600: '#7E4FA0',
        },
        gold: '#E9C77E',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        dream: '0 20px 60px -20px rgba(80, 60, 160, 0.45)',
        glow: '0 0 40px rgba(180, 150, 255, 0.35)',
        card: '0 10px 40px -12px rgba(10, 10, 30, 0.55)',
      },
      backgroundImage: {
        'dream-gradient':
          'linear-gradient(160deg, #0B0E22 0%, #171A3C 45%, #281F66 100%)',
        'lavender-gradient':
          'linear-gradient(135deg, #ECE3FF 0%, #D9C9FF 50%, #C0A8FF 100%)',
        'plum-gradient':
          'linear-gradient(135deg, #5439B5 0%, #7E4FA0 55%, #9B6BBF 100%)',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        drift: {
          '0%': { transform: 'translateX(-5%)' },
          '100%': { transform: 'translateX(105%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 30px rgba(180,150,255,0.25)' },
          '50%': { boxShadow: '0 0 55px rgba(180,150,255,0.55)' },
        },
      },
      animation: {
        twinkle: 'twinkle 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        drift: 'drift 60s linear infinite',
        fadeUp: 'fadeUp 0.7s ease-out both',
        shimmer: 'shimmer 6s linear infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
