/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        "3xl": "2000px"
      } 
    },
    plugins: [
      require('tailwind-scrollbar-hide')
    ]
 }
}
