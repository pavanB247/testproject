/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: 'Poppins, sans-serif',
        sans: 'Poppins, sans-serif',
      },
    },
  },
  plugins: [],
}