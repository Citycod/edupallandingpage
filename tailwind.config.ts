import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#13ec6a",
          dark: "#0fd660",
        },
        background: {
          light: "#f6f8f7",
          dark: "#102217",
        },
        card: {
          dark: "#1a2e23",
        },
        border: {
          dark: "#234832",
        },
        text: {
          secondary: "#93c8a8",
        },
      },
      fontFamily: {
        display: ["Lexend", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(16,34,23,0.9) 0%, rgba(26,66,138,0.2) 50%, rgba(19,236,106,0.1) 100%)",
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
