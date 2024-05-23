/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3EB075",
        secondary: "#293968",
        third: "#b1b6c8",
        fourth: "#D8D8DA",
      },
    },
  },
  plugins: [],
};

