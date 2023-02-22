/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        1100: "1100px",
      },
      colors: {
        mred: "#f73859",
        mblue: "#1266dd",
        myellow: "#febb02",
      },
    },
  },
  plugins: [],
};
