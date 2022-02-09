module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: `media`, // false or `media` or `class`
  theme: {
    extend: {
      fontFamily: {
        sans: ['BR Firma', 'sans-serif'],
        serif: ['New Font', 'serif'],
      },
      colors: {
        bkgroundblack: '#606060',
        bkgroundpurple: '#4d0138',
        bkgroundblue: '#51b3bf',
        bkgrounddarkblue: '#0081A7',
      },
    },
  },
  plugins: [],
};
