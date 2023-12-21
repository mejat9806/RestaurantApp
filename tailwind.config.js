/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: "Roboto Mono ,monospace", // sans is default tailwind and be replaced it
      //this will overwrite everything
      menu: "Rubik Doodle Shadow",
      menuTitle: "Fjalla One",
    },
    extend: {},

    plugins: [],
  },
};
