/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {

      transitionProperty: {
        'width': 'width',
        'height': 'height'
      },
      backgroundColor: {
        'main-bg': '#f8f9fa',
        'slate-300': '#e9ecef',
        'main-dark-bg': '#161722',
        'secondary-dark-bg': '#25273c',
        
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
}