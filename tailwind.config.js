// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // ← active le mode sombre via une classe
  theme: {
    extend: {
      colors: {
        beige: "#fdf8f3",
        marron: "#a87a64",
        doré: "#d4af37",
      },
    },
  },
  plugins: [],
};
