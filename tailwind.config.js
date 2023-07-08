module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Using modern `rgb`
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-soft": "rgb(var(--color-primary-soft) / <alpha-value>)",
        secondery: "rgb(var(--color-secondery) / <alpha-value>)",
        bgbody: "rgb(var(--color-bgbody) / <alpha-value>)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
