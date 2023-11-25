/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",'./script.js',"./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
          // Primary
          Purple:'hsl(259, 100%, 65%)',
          Light_red:'hsl(0, 100%, 67%)',
          // Neutral
          White: 'hsl(0, 0%, 100%)',
          Off_white: 'hsl(0, 0%, 94%)',
          Light_grey: 'hsl(0, 0%, 86%)',
          Smokey_grey: 'hsl(0, 1%, 44%)',
          Off_black: 'hsl(0, 0%, 8%)',
      },
      fontFamily:{
        pop_italic:"'pop-italic'",
        pop_bold:"pop-bold",
        pop_ex_italic:"'pop-italic-ex'",
      },
      backgroundImage:{
        "arrow":"url(./assets/images/icon-arrow.svg)"
      }
      
    },
  },
  plugins: [],
}

