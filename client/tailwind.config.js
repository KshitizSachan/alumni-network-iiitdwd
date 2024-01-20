/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //--------------------------------Custom Colors------------------------------------
        primaryPink: '#FA005E',
        primaryBackground: '#F7F6F6',
        accent: '#ffc107',
      },
    },
  },
  plugins: [],
}