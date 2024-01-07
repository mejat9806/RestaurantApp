/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: "Roboto Mono, monospace", // sans is default tailwind and be replaced it
      // this will overwrite everything
      menu: "Rubik Doodle Shadow",
      menuTitle: "Fjalla One",
    },
    extend: {
      backgroundImage: {
        banner: "url('/public/meat/BBQ banner.jpg')",
      },
      gridTemplateColumns: {
        formCol: "1fr 2fr 1.4fr",
        formColSmall: "1fr 2fr",
      },
    },
  },
  plugins: [],
};
