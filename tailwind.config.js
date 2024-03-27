/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        info: "#0084BD",
        success: "#5DC021",
        warning: "#EE8B16",
        "border-dark": "#414141",
        surface: '#FFDD2D',
        primary: '#414141'
      },
    },
  },
  plugins: [],
};
