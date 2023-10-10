const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        front: 'rgb(var(--front-color) / <alpha-value>)',
        back: 'rgb(var(--back-color) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Chakra Petch"', ...defaultTheme.fontFamily.sans],
        emoji: ['"Noto Emoji"'],
        neon: 'Neonderthaw',
      },
      boxShadow: {
        solid: '4px 4px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('./plugins/text-neon'),
  ],
};
