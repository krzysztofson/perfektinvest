module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Nunito Sans", "sans-serif"],
        heading: ["Playfair Display", "serif"],
        fancy: ["Josefin Sans", "serif"],
      },
      colors: {
        primary: "#085ec7",
        secondary: "#8199bd",
        accent: "#000",
      },
    },
  },
  variants: {},
  plugins: [],
};
