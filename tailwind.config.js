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
        heartbeat: {
          from: {
            transform: "scale(1)",
            "transform-origin": "center center",
            "animation-timing-function": "ease-out",
          },
          "10%": {
            transform: "scale(0.91)",
            "animation-timing-function": "ease-in",
          },
          "17%": {
            transform: "scale(0.98)",
            "animation-timing-function": "ease-out",
          },
          "33%": {
            transform: "scale(0.87)",
            "animation-timing-function": "ease-in",
          },
          "45%": {
            transform: "scale(1)",
            "animation-timing-function": "ease-out",
          },
        },
      },
      animation: {
        "cloudchat-bubble-1":
          "cloudchat-bubble 6s ease 0s infinite alternate both",
        "cloudchat-bubble-2":
          "cloudchat-bubble 6s ease 4s infinite alternate both",
        heartbeat: "heartbeat 1s ease-in-out both",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
