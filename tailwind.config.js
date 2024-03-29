/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      satoshiRegular: ["Satoshi"],
      satoshiMedium: ["SatoshiMedium"],
      satoshiBold: ["SatoshiBold"]
    },
    colors: {
      white: '#FFFFFF',
      wheat: '#F7F4FF',
      lightgray: '#CFCBD7',
      gray: '#666687',
      darkGray: '#232325',
      purple: '#6F3DE9',
      darkBlue: '#171B2E',
      lightBlue: '#4D44B5',
      blue: '#2D59F3',
      green: '#1AAE6F',
      red: '#F32D2D',
      mustard: '#E9A800'
    }
  },
  plugins: [],
}
