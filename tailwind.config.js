export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kanit-light': ['"Kanit"', 'sans-serif'],  // Fonte com peso leve (300)
        'kanit-regular': ['"Kanit"', 'sans-serif'],  // Fonte com peso regular (400)
        'kanit-medium': ['"Kanit"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}