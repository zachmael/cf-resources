import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f7f0',
          100: '#e6eddc',
          200: '#cedcbc',
          300: '#aec493',
          400: '#8daa6c',
          500: '#6f8f4e',
          600: '#56723c',
          700: '#435831',
          800: '#38482a',
          900: '#303d26',
          950: '#172011',
        },
        earth: {
          50: '#faf6f1',
          100: '#f0e8db',
          200: '#e0ceb5',
          300: '#cdaf88',
          400: '#bc9264',
          500: '#b07e4e',
          600: '#a36a43',
          700: '#875339',
          800: '#6e4533',
          900: '#5a3a2c',
          950: '#301d16',
        },
        forest: {
          50: '#f0f9f1',
          100: '#dbf0de',
          200: '#b9e1c0',
          300: '#8bcb97',
          400: '#59ae6a',
          500: '#38934d',
          600: '#28763c',
          700: '#215e32',
          800: '#1d4b2a',
          900: '#193e24',
          950: '#0c2214',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
