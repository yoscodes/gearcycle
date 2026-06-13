/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0B0F1A",
          800: "#111827",
          700: "#1E293B",
          600: "#243146",
        },
        cyan: {
          400: "#22D3EE",
          500: "#06B6D4",
        },
      },
    },
  },
  plugins: [],
};
