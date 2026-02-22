import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#fef8f0',
          100: '#fdecd4',
          200: '#fbd5a3',
          300: '#f6b96a',
          400: '#f0a040',
          500: '#E8912D',
          600: '#d07a1f',
          700: '#ad6119',
          800: '#8a4d17',
          900: '#6f3d14',
        },
        brand: {
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#eaeaea',
          300: '#d9d9d9',
          400: '#a0a0a0',
          500: '#6b6b6b',
          600: '#4a4a4a',
          700: '#333333',
          800: '#1e1e1e',
          900: '#090909',
          950: '#29292b',
        },
        teal: {
          50: '#f0fafb',
          100: '#d4eff3',
          200: '#a8dfe7',
          300: '#6fc9d6',
          400: '#3aabb9',
          500: '#258193',
          600: '#1f6b7a',
          700: '#1a5663',
          800: '#15434e',
          900: '#0f2f38',
          950: '#091e24',
        },
        blue: {
          50: '#f0f6fb',
          100: '#d9eaf5',
          200: '#b3d5eb',
          300: '#8cbfdf',
          400: '#579BC6',
          500: '#3d82b0',
          600: '#2f6a93',
          700: '#245275',
          800: '#1a3c57',
          900: '#0f2639',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Inter Display"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
