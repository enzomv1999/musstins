/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "390px" },
        tablet: { max: "768px" },
        desktop: { max: "1440px" },
      },
      fontFamily: {
        sans: ["Metropolis", "sans-serif"],
        serif: ["Helvetica Neue", "serif"],
      },
      colors: {
        backgroundDark: "#0B0C12",
        backgroundServices: "#11131B",
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
        titlesLg: [
          "1.5rem",
          {
            lineHeight: "1.6rem",
            fontWeight: "500",
          },
        ],
        titlesMd: [
          "1.25rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "700",
          },
        ],
        titlesSm: [
          "1.25rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "400",
          },
        ],
        bodyLg: [
          "1rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "400",
          },
        ],
        bodySm: [
          ".875rem",
          {
            lineHeight: "1.3rem",
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
        shortTrace: "1.875rem",
      },
      height: {
        trace: "0.06rem",
      },
    },
  },
  plugins: [],
};
