/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primaryOrange: '#FF5722',
        primaryBlack: '#212121',
        mainGrey: '#BFBFBF',
        mainRed: '#B80000',
        mainGreen: '#397B1A',
      },
    },
  },
  plugins: [],
}
