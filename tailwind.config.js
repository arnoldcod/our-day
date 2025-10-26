/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
                calligraphy: ['"Allura"', 'cursive'],
              },
      colors: {
        'primary': '#1a4731',
        'primary-dark': '#2d7a52',
        'secondary': '#6b7280',
      },
    },
  },
  plugins: [],
}


