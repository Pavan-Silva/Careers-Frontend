import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "transparent-white": "rgba(255, 255, 255, 0.85)",
        "dark-orange": "#e40c1c",
        "light-orange": "#fc5c3c",
      },

      animation: {
        "fade-in": "fade_in 1s",
      },

      keyframes: {
        fade_in: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
