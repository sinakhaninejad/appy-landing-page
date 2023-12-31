/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "640px" },
    },
    extend: {
      colors: {
        "nav-border": "#E2E8F0",
        "main-button": "#2563EB",
        "main-text": "#0F172A",
        "footer-gray": "#475569",
      },
    },
  },
  plugins: [],
};
