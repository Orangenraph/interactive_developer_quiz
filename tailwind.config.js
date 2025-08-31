// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scannt alle relevanten Dateien im src-Ordner
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}