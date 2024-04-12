/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#7A2CFF"
      },
      backgroundImage: {
        'vector': "url('/src/assets/test2.svg')",
      }
    },
    borderRadius: {
      main: "10px",
    },
  },
  plugins: [],
}

