import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'teclado': "url('/images/bg.jpg')"
      },
      colors:{
        'black-90': "rgba(0,0,0,0.9)"
      },
    },
  },
  plugins: [],
};
export default config;
