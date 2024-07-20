colorCollection = {
  primary: {
    l: "#5f8da7",
    n: "#272e3e",
    d: "#1d212e"
  },
  secondary: {
    l: "#ffca82",
    n: "#e3ad74",
    d: "#96724c",
  },
  grey: {
    light: "#CDCDCD",
    neutral: "#8A8A8A",
    dark: "#565656",
  },
  white: "#ffffff",
  red: "#d32929",
  green: "#008000"
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      boxShadow: {
        light: "0px 3px 20px #0000000b",
      },
      spacing: {
        "7xl": "80rem",
        "8xl": "88rem",
        "9xl": "96rem"
      }
    },
    colors: colorCollection,
    backgroundColor: colorCollection,
    borderColor: colorCollection
  },
  plugins: [],
};
