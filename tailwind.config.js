/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Custom font
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      boxShadow: {
        'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.25)', // Custom text shadow
      },
    },
  },
  plugins: [],
}