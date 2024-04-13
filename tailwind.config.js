/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
      },
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
      },
      colors: {
        preto: { primario: "#333333" },
        vermelho: { primario: "#EB5757" },
        branco: "#FEE9DE",
        cinza: { "cinza-primario": "#E0E0E0" },
      },
      screens: {
        sm: "430px", // Tamanho de tela pequeno
        md: "768px", // Tamanho de tela médio
        lg: "1200px", // Tamanho de tela grande
      },
    },
  },
  plugins: [],
};
