/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      "my-font": "my-font"
    },
    extend: {
      screens: {
        md: "901px",
        mdx: {"max": "901px"},
        lgx: {"max": "1400px"},
      },
      colors: {
        orange: "#ce5042",
        darkPurple: "#2a002e",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}