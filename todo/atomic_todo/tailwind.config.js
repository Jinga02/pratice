/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "rgba(8, 7, 34, 0.8828125)",
        basicText: "white",
        todoText: "black",
        accent: "#ff9b17",
        darkAccent: "rgba(8, 7, 34, 0.8828125)",
      },

      height: {
        10: "10%",
        90: "90%",
      },
    },
  },

  darkMode: "class",
  plugins: [],
};
