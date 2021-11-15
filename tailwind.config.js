module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  //darkMode: "media",
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      colors: {
        trueblue: "#0000FF",
      },
      fontFamily: {
        sans: ["Helvetica"],
        serif: ["Times New Roman"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
