/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          // sm: "2rem",
          // md: "3rem",
          // lg: "4rem",
          // xl: "5rem",
          // "2xl":"6rem"
        }
      },
      fontSize: {
        'h1': '3rem',  // Customize font size for <h1>
        'h2': '2.5rem', // Customize font size for <h2>
        'h3': '2rem',   // Customize font size for <h3>
        'h4': '1.75rem', // Customize font size for <h4>
        'h5': '1.5rem',  // Customize font size for <h5>
        'h6': '1.25rem', // Customize font size for <h6>
      },
      colors: {
        lightOlive: '#DBDFD0', // Light greenish-gray
        darkGray: '#474747',   // Dark gray
        crimson: '#AD343E',    // Deep red
      }
    },
  },
  plugins: [],
}