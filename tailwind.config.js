/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
      "./components/**/*.{astro,html,js,jsx,ts,tsx}",
      "./pages/**/*.{astro,html,js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        fontFamily: {
          oswald: ["Oswald", "sans-serif"],
          new: ["'New'", "sans-serif"],
          wolker: ["'Wolker'", "'Wolkerjuiced'", "'Wolkerjuiceoutline'", "'Wolkeroutline'", "sans-serif"],
          wolkeroutline: ["Wolkeroutline", "sans-serif"], 
          york: ["'York'", "sans-serif"],
        },
      },
    },
    plugins: [require('@tailwindcss/typography')],
  };
  