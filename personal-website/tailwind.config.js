// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 👇 Add CSS variables
        poppins: ["var(--font-poppins)"],
        jetbrainsmono: ["var(--font-jetbrains-mono)"],
      },
    },
  },
  plugins: [],
};