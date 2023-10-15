/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#eaece9",
        text: "#191c17",
        primary: "#38423a",
        secondary: "#e3e8e6",
        accent: "#758a84",
      },
    },
  },
  plugins: [],
};
