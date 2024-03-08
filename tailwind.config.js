/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./themes/cloudchat/layout/**/*.njk"],
  theme: {
    extend: {
      keyframes: {
        "cloudchat-bubble": {
          "0%": { opacity: 0 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "cloudchat-bubble-1":
          "cloudchat-bubble 6s ease 0s infinite alternate both",
        "cloudchat-bubble-2":
          "cloudchat-bubble 6s ease 4s infinite alternate both",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
