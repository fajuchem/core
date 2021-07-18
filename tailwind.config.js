const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: process.env.NODE_ENV && 'jit',
  purge: {
    enabled: true,
    content: [
      './**/*.html',
      './**/*.razor'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        grey: {
          light: '#161b22',
          DEFAULT: '#0d1117',
          dark: '#010409',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
