/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    extend: {
      colors: {
        primary: "#131424",
        secondary: "#393A47",
        accent: "#F13024",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      backgroundImage: {
        site: 'url("./src/assets/site-bg.svg")',
        explosion: 'url("./src/assets/bg-explosion.png")',
        circleStar: 'url("./src/assets/circle-star.svg")',
      },
    },
    screen: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
  },
  plugins: [],
};
