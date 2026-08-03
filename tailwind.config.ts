import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        detective: {
          black: '#111111',
          brown: '#2B1D16',
          cork: '#8B6B4A',
          paper: '#F4ECD8',
          crimson: '#cc0000',
          ink: '#c5a059',
        }
      },
      fontFamily: {
        typewriter: ['"Special Elite"', 'serif'],
        handwritten: ['"Reenie Beanie"', 'cursive'],
      }
    },
  },
  plugins: [],
};
export default config;