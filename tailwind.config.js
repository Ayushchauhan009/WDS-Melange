/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      cursor: {
        "custom-cursor": 'url("./src/assets/images/cursor.png"), auto',
      },
      keyframes: {
        scale: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        scale: "scale 0.5s ease-in-out",
      },
      screens: {
        xxs: "300px",
        xss: "390px",
        xs: "400px",
        xxll: "1368px",
        xxl: "1400px",
        xl1: "1460px",
        xl2: "1500px",
        xxxl: "1561px",
        xll2: "1601px",
        xl5: "1650px",
        xll4: "1690px",
        xl6: "1700px",
        xl7: "1740px",
      },
    },
  },
  plugins: [],
};
