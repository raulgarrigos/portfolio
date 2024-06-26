/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "background-shine": "background-shine 2s linear infinite",
        "text-gradient": "text-gradient 1.5s linear infinite",
      },
      keyframes: {
        "background-shine": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "text-gradient": {
          to: {
            backgroundPosition: "200% center",
          },
        },
      },
    },
    plugins: [],
  },
};
