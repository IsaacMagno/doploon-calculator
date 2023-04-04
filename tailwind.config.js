/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('../public/kerubim2000.jpg')",
        "mobile-hero": "url('../public/mobile-bg.jpg')",
      },
    },
  },
  plugins: [],
};
