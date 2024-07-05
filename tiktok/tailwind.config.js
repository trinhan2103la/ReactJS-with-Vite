/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorSearch: "rgba(22,24,35,0.06)",
        colorli: "rgba(22,24,35,0.03)",
        colorl: "rgba(22,24,35,0.12)",
        colorlis: "rgba(22,24,35,0.34)",
        colorInput: "#828282",
      },
    },
  },
  plugins: [],
};
