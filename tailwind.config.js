/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./es/*.html", "./fr/*.html", "./zh/*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#B91C1C',
        'primary-dark': '#991B1B'
      }
    }
  },
  plugins: [],
}
