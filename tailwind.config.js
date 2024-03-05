/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        aspectRatio:{
          '4/3': "4 / 3"
        },
        fontFamily: {
          poppin: ['Poppins', 'sans-serif']
        },
        colors: {
          fonteText: ["#333333"],
          vermelho:["#EB5757"],
          laranjaFraco: ["#FEE9DE"]
        }
      },
    },
    plugins: [],
  }