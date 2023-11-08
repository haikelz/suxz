/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8C82FC",
        secondary: "#44E4C9",
        tertiary: "#F7F7FD",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        workplace: "url('/images/get-started-bg.png')",
      },
      opacity: {
        55: ".55",
      },
    },
  },
  plugins: [],
};
