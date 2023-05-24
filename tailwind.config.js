/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'fondamento': ["Fondamento", "cursive"]
      }
    }
  },
  plugins: [require("daisyui")],
};