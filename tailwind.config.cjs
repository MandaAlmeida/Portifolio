/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    screens: {
      'sm': '280px',
      'md': '720px',
      'lg': '1025px',
      'xl': '2500px',
    },
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
      xing: ['Zhi Mang Xing', 'sans-serif'],
      heebo: ['Heebo', 'sans-serif']
    },
    extend: {
      colors: {
        'neutra': '#E3E4E6'
      },
      backgroundImage: {
        fundo: 'url(/fundo.png)',
        'background-fundo': 'linear-gradient(180deg, #010208 16.39%, #010206 20.51%, #040008 24.79%, #010101 30.46%, #010101 34.11%, #010101 36.21%, #010101 100%)',
        'primary': 'linear-gradient(99.05deg, #BC3CD8 0.07%, #C54B8C 106.32%)',
        'white': 'linear-gradient(99.05deg, #ffffff 0.07%, #ffffff 106.32%)'
      }
    },
  }
}
