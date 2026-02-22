import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
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
          50: '#f0f9fa',
          100: '#d4eff3',
          200: '#a8dfe7',
          300: '#6fc9d6',
          400: '#3aabb9',
          500: '#258193',
          600: '#1f6b7a',
          700: '#1a5663',
          800: '#15434e',
          900: '#0f2f38',
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
    },
  },
  plugins: [],
};

export default config;
