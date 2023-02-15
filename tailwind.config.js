/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fontTittle':['Lobster', 'cursive'],
        'fontIntroduction':[ 'Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

