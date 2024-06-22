/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        chambray: "#49557E",
        tomato: "#FA5B42",
        h1: "#262626",
        text1: "#808080",
        text2: "#747474",
        text3:"#676767",
        hr: "#e2e2e2",
        footer: "#d9d9d9",
        bgFooter: "#323232",
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
      backgroundImage:{
        'header-img': "url('/public/header_img.png')"
      },
      keyframes:{
        fadeIn: {
          '0%':{opacity: 0},
          '100%':{opacity: 1}
        }
      },
      animation:{
        fadeIn: 'fadeIn 3s'
      },
      gridTemplateColumns: {
        'foodDisplay': 'repeat(auto-fill,minmax(240px,1fr))'
      },
      boxShadow:{
        'foodItem': '0px 0px 10px #00000015'
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

