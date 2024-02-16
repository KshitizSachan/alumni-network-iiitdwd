/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'navbarShadow': '3px 3px 3px 0px rgba(0, 0, 0, 0.25)',
        '2xl': '25px 25px 50px 0px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        //--------------------------------Custom Colors------------------------------------
        primaryPink: '#FA005E',
        primaryBackground: '#F7F6F6',
        accent: '#ffc107',
      },
      fontFamily: {
        'poppins': 'Poppins, sans-serif',
      }
    },
  },
  plugins: [],
}