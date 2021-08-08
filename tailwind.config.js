module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
