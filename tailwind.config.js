/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bonna: {
          orange: "#f8a409ff",   // Primär
          light: "#FFF8E1",    // Sekundär
          hover: "#FFC043",    // Hover
          dark: "#0a0a0aff",     // Text / kant
        },
      },
      fontFamily: {
        rye: ['Rye', 'serif'],
      },
    },
  },
  plugins: [],
};
