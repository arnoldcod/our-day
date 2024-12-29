/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a4731', // dark green
        'secondary': '#6b7280', // grey
      }
    },
  },
  plugins: [],
}