module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
      fontFamily: 'Proxima Nova',
      container: {
          center: true
      },
      extend: {
          colors: {
              'green': '#1DB954',
              'dark': '#121212',
              'light': '#282828',
              'lightest': '#B3B3B3',
              'darkest': '#191414'
          }
      },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
