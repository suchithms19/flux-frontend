/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#ffe05c',
        customGrey:'#e2e5e3'
      },
    },
  },
  plugins: [],
}