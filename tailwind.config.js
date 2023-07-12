/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {},
    colors: {
      PrimaryColor: '#2702ff',
      TitleColor: '#000f33',
      SubtitleColor: '#656c80',
      LighGrayColor: '#f8f8f8',
      whiteColor: '#ffffff',
      greenColor: '#00ac4f',
      redColor: '#fd3737',
    },
    fontFamily: {
      poppins: ['poppins', 'sans-serif'],
      roboto: ['roboto', 'sans-serif'],
    },
    boxShadow: {
      shadowMobile: ' 0px 4px 20px 0px rgba(211, 211, 211, 0.5)',
    },
  },
  plugins: [],
};
