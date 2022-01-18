module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['BR Firma', 'sans-serif'],
        serif: ['New Font', 'serif'],
    },
    },
  },
  plugins: [],
};
