module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gradient1: "#e00b8b",
        gradient2: "#fa4b00",
        notblack: "#2D2E2E",
        darkbg: "#242424",
        tb: "#00000",
        notwhite: "#EBFCFF",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
