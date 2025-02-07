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
          arcadia: ["'ArcadiaNova-Regular'", "sans-serif"],
          brooklyn: ["'Brooklyn-Bold'", "'Brooklyn-Heavy'", "'Brooklyn-Normal'", "sans-serif"],
          felix: ["'Felix'", "'Felix Clean'", "sans-serif"],
          freedom: ["'Forever Freedom Outline'", "'Forever Freedom Outline Italic'", "'Forever Freedom Regular'", "sans-serif"],
          huster: ["'Husterdun Script'", "'Husterdun Serif'", "cursive"],
          khela: ["'Khela Outline'", "sans-serif"],
          morline: ["'Morline'", "'Morline Slant'", "sans-serif"],
          new: ["'New'", "sans-serif"],
          portico: ["'Portico Outline'", "sans-serif"],
          prospec: ["'Prospec Outline'", "sans-serif"],
          quintaras: ["'Quintaras'", "'Quintaras alt'", "'Quintaras Sans'", "'Quintaras Sans Outline'", "sans-serif"],
          urbano: ["'URBANOLight'", "'URBANOOutlined'", "sans-serif"],
          wolker: ["'Wolker'", "'Wolkerjuiced'", "'Wolkerjuiceoutline'", "'Wolkeroutline'", "sans-serif"],
          wolkeroutline: ["Wolkeroutline", "sans-serif"], 
          york: ["'York'", "sans-serif"],
        },
      },
    },
    plugins: [require('@tailwindcss/typography')],
  };
  