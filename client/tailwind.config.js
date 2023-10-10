/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.750rem",
      base: "1rem",
      xl: "1.333rem",
      "2xl": "1.777rem",
      "3xl": "2.369rem",
      "4xl": "3.158rem",
      "5xl": "4.210rem",
    },
    fontFamily: {
      heading: "Noto Serif Dogra",
      body: "Noto Serif Dogra",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    extend: {
      colors: {
        text: "#191c17",
        background: "#eaece9",
        primary: "#38423a",
        secondary: "#e3e8e6",
        accent: "#758a84",
      },
    },
  },
  plugins: [],
};
