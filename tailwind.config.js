/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'product-card': '0 4px 13px 0 rgba(0, 0, 0, 0.25)', // X, Y, Blur, Spread with 25% opacity
      },
      colors: {
        'nhc': '#285F9D',
      },
      backgroundColor: {
        'nhc': '#285F9D'
      },
      borderRadius: {
        'nhc': '10px'
      },
      fontFamily: {
        abel: ['var(--font-abel)'],
      }
    },
  },
  plugins: [],
}

