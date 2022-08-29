/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js,jsx}", "./components/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#4ff243",

        "secondary": "#ff9387",

        "accent": "#a412d1",

        "neutral": "#1B2531",

        "base-100": "#F4F5F5",

        "info": "#83C5EC",

        "success": "#168368",

        "warning": "#D98908",

        "error": "#E85984",
      },
    },],
  },
}
