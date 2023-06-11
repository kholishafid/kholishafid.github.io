/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#0A84FF",
        "dark-secondary": "#30D158",
        "dark-accent": "#FF453A",
        "dark-background": "#1C1C1E",
        "dark-paragraph": "#FFFFFF",
        "dark-subtext": "#8E8E93",
        "light-primary": "#007AFF",
        "light-secondary": "#34C759",
        "light-accent": "#FF3B30",
        "light-background": "#F2F2F7",
        "light-paragraph": "#000000",
        "light-subtext": "#666666"
      },
      fontFamily: {
        lato: "'Lato', sans-serif",
        roboto: "'Roboto', sans-serif",
        "open-sans": "'Open Sans', sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
