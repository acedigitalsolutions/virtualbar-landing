import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          primary: {
            50: "#f3e8ff",
            100: "#e9d5ff", 
            200: "#d8b4fe",
            300: "#c084fc",
            400: "#a855f7",
            500: "#8E1B7F",
            600: "#7c2d92",
            700: "#6b21a8",
            800: "#581c87",
            900: "#4c1d95",
            DEFAULT: "#8E1B7F",
            foreground: "#ffffff",
          },
        },
      },
      dark: {
        colors: {
          primary: {
            50: "#f3e8ff",
            100: "#e9d5ff",
            200: "#d8b4fe", 
            300: "#c084fc",
            400: "#a855f7",
            500: "#8E1B7F",
            600: "#7c2d92",
            700: "#6b21a8",
            800: "#581c87",
            900: "#4c1d95",
            DEFAULT: "#8E1B7F",
            foreground: "#ffffff",
          },
        },
      },
    },
  })],
}

module.exports = config;