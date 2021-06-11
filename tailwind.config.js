module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgdarkSecondary: "#2b2d42",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
