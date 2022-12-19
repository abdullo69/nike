/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "img1":"url('/src/images/finders.webp')",
        "tren1":"url('/src/images/tren.webp')",
        "tren2":"url('/src/images/tren2.webp')",
        "kra":"url('/src/images/kra.webp')",
        "fea1":"url('/src/images/fea1.webp')",
        "fea2":"url('/src/images/fea2.webp')",
        "more1":"url('/src/images/more1.webp')",
        "more2":"url('/src/images/more2.webp')",
        "more3":"url('/src/images/more3.webp')",
      }
    },
  },
  plugins: [],
}
