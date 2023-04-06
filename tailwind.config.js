/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        backgroud: "#22222c",
        primary: "#ef233c",
      },
      fontFamily: {
        cardo: "'Cardo', serif",
        hind: "'Hind', sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
