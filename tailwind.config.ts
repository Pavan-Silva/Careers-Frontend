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
        "lime-green": "#23CD6B",
        "matte-black": "#272D2D",
        "light-pink": "#fcccd4",
        "light-green": "#c4f4cc",
      },

      fontSize: {
        clamp_title: "clamp(2.5rem , 6vw, 5.6rem)",
      },

      width: {
        clamp_image: "clamp(600px , 100%, 800px)",
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
