// tailwind.config.js

const colors = require('tailwindcss/colors')


module.exports = {
  purge: [
     // './src/**/*.html',
     // './src/**/*.js',
     './dist/**/*.html'
   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: colors
  },
  variants: {},
  plugins: [],
}
