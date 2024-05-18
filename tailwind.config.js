/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f7941d",
        secondary: "#293968",
        third: "#b1b6c8",
        fourth: "#D8D8DA",
      },
    },
  },
  plugins: [],
};

