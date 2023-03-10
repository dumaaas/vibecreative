/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1em',
        maxWidth: 'xl'
      },
      colors: {
        primary: '#009696'
      }
    },
  },
  plugins: [],
}
