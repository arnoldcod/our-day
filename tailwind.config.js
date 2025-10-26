/** @type {import('tailwindcss').Config} */
export default {
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
        'secondary': '#6b7280',
      },
    },
  },
  plugins: [],
}


