/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      keyframes: {
        "move-right": {
          '0%':{ transform : 'translateX(10px)' },
          '100%' : { transform : 'translateX(200px)' },
        },
        "goyang-goyang" : {
          '0%,100%' : {transform : 'rotate(-3deg)'},
          '50%' : {transform : 'rotate(3deg)'},
        }

      },
      animation:{
        'bounce-slow':'bounce 4s linear infinite',
        move : 'move-right 8s ease-linear infinite',
        goyang : 'goyang-goyang 1s ease-in-out infinite',
      },
      colors:{
        test : '#EB1313',
      }
    },
  },
  plugins: [],
}

