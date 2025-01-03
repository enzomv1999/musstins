/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: { max: "768px" },
      },
      fontFamily: {
        sans: ["Metropolis", "sans-serif"],
        serif: ["Helvetica Neue", "serif"],
      },
      colors: {
        backgroundDark: "#0B0C12",
        beigeLight: "#FEFDF8",
        gray: "#9F9E9A",
        lightBlue: "#5B6BFA",
      },
      fontSize: {
        mainTitle: [
          "4rem",
          {
            lineHeight: "4rem",
            fontWeight: "700",
          },
        ],
        titles: [
          "2.5rem",
          {
            lineHeight: "2.9rem",
            fontWeight: "700",
          },
        ],
        bodyText: [
          "1rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "400",
          },
        ],
        button: [
          ".875rem",
          {
            fontWeight: "500",
          },
        ],
        lg: [
          "1.25rem",
          {
            lineHeight: "2rem",
            fontWeight: "400",
          },
        ],
        md: [
          "0.875rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "400",
          },
        ],
        decorator: [
          "0.75rem",
          {
            lineHeight: "0.75rem",
            fontWeight: "400",
          },
        ],
      },
      width: {
        trace: "3.75rem",
      },
      height: {
        trace: "0.06rem",
      },
    },
  },
  plugins: [],
};
