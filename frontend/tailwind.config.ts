import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'netflix-red': '#e50914',
        'netflix-black': '#000000',
        'netflix-dark-gray': '#232323',
        'netflix-gray': '#2d2d2d',
        'netflix-light-gray': '#808080',
        'netflix-purple': '#1a1a3a',
      },
    },
  },
  plugins: [],
};
export default config;