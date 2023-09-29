/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      boxShadow: {
        bottom: "0px 14px 8px -12px rgba(34, 60, 80, 0.46);",
      },
      animation: {
        "flip-load": "flip-load 2s linear infinite",
      },
      keyframes: {
        "flip-load": {
          "0%": { transform: "rotateX(0deg) rotateY(0deg)" },
          "25%": { transform: "rotateX(0deg) rotateY(180deg)" },
          "50%": { transform: "rotateX(180deg) rotateY(180deg)" },
          "75%": { transform: "rotateX(180deg) rotateY(0deg)" },
          "100%": { transform: "rotateX(0deg) rotateY(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
