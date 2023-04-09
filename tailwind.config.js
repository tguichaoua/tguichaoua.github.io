/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "cursive"],
        "rubik-glitch": ['"Rubik Glitch"', "cursive"],
        "press-start": ['"Press Start 2P"', "cursive"],
        silkscreen: ["Silkscreen", "cursive"],
        alkatra: ["Alkatra", "cursive"],
        "gajraj-one": ['"Gajraj One"', "cursive"],
      },
    },
  },
  plugins: [],
};
