/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        primaryColor: 'var(--primary-color)',
        secondaryColor: 'var(--secondary-color)',
        thirdColor: 'var(--third-color)',
        bgColor: 'var(--bg-color)',
        primaryOrange: '#ff5722',
        primaryBlack: '#212121',
        mainRed: '#ff4e4e',
        mainGreen: '#397B1A',
      },
    },
  },
  plugins: [],
}
