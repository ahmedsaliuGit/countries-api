/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        darkBlue: "hsl(209, 23%, 22%)",
        vDarkBlueBg: "hsl(207, 26%, 17%)",
        vDarkBlueText: "hsl(200, 15%, 8%)",
        darkGrayLightInput: "hsl(0, 0%, 52%)",
        vDarkGrayLightBg: "hsl(0, 0%, 98%)",
        whiteDarkTextLightElements: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
