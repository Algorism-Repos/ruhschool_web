/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        brown: "#913412",
        green: "#505C44",
        offwhite: "#FFF2DD",
        yellow: "#FEC157",
        orange: "#DC602A",
        teal : "#1B8386",
      },
      fontFamily:{
        "causten": ["Causten", "sans-serif"],
        "aelyn" : ["PS-Aelyn", "serif" ],
        "hugme" : ["HugmeTight", "sans-serif"],
        "caveat": ["Caveat", "serif"],
      },
      backgroundImage:{
        'home-animation': 'url("/src/assets/images/home/animation_bg.png")',
        'home-animation-mobile': 'url("/src/assets/images/home/animation_bg_mobile.png")',
      },

      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(-100%)' }, // Start outside the viewport (right)
          '100%': { transform: 'translateX(100%)' }, // Move to the left completely
        },
      },
      animation: {
        scroll: 'scroll 25s linear infinite',
      },


    },
  },
  plugins: [],
}