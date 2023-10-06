const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ matchUtilities }) {
  matchUtilities(
    {
      'text-neon': (value) => ({
        'text-shadow': `0 0 ${value} currentColor`,
      }),
    },
    {
      type: 'length',
    }
  );
});
