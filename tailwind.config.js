// tailwind.config.js

const colors = require('tailwindcss/colors')


module.exports = {
  purge: [
     // './src/**/*.html',
     // './src/**/*.js',
     './*.html',
   ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            stone: colors.warmGray,
            sky: colors.lightBlue,
            neutral: colors.trueGray,
            gray: colors.coolGray,
            slate: colors.blueGray,
        }
    },
    colors: colors,
  },
  variants: {},
  plugins: [],
}
