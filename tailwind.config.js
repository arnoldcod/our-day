/** @type {import('tailwindcss').Config} */
import textShadow from 'tailwindcss-textshadow'

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
      textShadow: {
        glow: '0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff',
      },
    },
  },
  plugins: [textShadow],
}


