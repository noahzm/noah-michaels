module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "noah-blue": "#0000FF",
      },
    },
    fontFamily: {
      display: ["UnifrakturMaguntia", "cursive"],
      sans: ["Inter", "sans-serif"],
      serif: ["kepler-std", "ui-serif", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
