/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        neon: 'Neonderthaw',
      },
      boxShadow: {
        solid: '4px 4px',
      },
    },
  },
  plugins: [],
};

// function colorVarsPlugin({ addBase, theme }) {
//   function extractColorVars(colorObj, colorGroup = '') {
//     return Object.keys(colorObj).reduce((vars, colorKey) => {
//       const value = colorObj[colorKey];

//       const newVars =
//         typeof value === 'string'
//           ? { [`--color${colorGroup}-${colorKey}`]: value }
//           : extractColorVars(value, `-${colorKey}`);

//       return { ...vars, ...newVars };
//     }, {});
//   }

//   addBase({
//     ':root': extractColorVars(theme('colors')),
//   });
// }
