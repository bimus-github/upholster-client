/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      boxShadow: {
        bottom: "0px 14px 8px -12px rgba(34, 60, 80, 0.46);",
      },
    },
  },
  plugins: [],
};
