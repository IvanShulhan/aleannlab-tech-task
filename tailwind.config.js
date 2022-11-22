/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'lt': '416px',
      },
      fontFamily: {
        'proxima': ['Proxima Nova', 'Roboto', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'strong-gray': '#384564',
        'main-grey': '#3a4562',
        'middle-gray': '#70778B',
        'light-grey': '#878D9D',
        'light-blue': '#5876C5',
      },
      borderRadius: {
        'full': '50%',
      },
      animation: {
        'spin-slow': 'spin 1.5s linear infinite',
      },
      backgroundImage: {
        'point': 'url("../../assecc/images/location.svg")',
        'bookmark': 'url("../../assecc/images/bookmark.svg")',
        'share': 'url("../../assecc/images/share.svg")',
        'bookmark-active': 'url("../../assecc/images/bookmark-active.svg")',
        'arrow': 'url("./assecc/images/arrow.svg")',
        'star': 'url("../../assecc/images/star.svg")',
        'star-active': 'url("../../assecc/images/star-active.svg")',
      },
      boxShadow: {
        'card': '2px 1px 7px #00000014, 0px 2px 1px -1px #0000000a, 0px 1px 3px #0000001f',
      }
    },
  },
  plugins: [],
}
