/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./themes/cloudchat/layout/**/*.njk"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
