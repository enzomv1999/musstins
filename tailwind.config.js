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
      },
      colors: {
        backgroundDark: "#0B0C12",
        beigeLight: "#FEFDF8",
      },
      fontSize: {
        lg: [
          "20px",
          {
            lineHeight: "2rem",
            fontWeight: "400",
          },
        ],
        md: [
          "14px",
          {
            lineHeight: "1.75rem",
            fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [],
};
