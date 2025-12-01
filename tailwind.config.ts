// File: tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // ფონტების კონფიგურაცია
      fontFamily: {
        // პრიორიტეტი: 1. ქართული, 2. ინგლისური (Inter), 3. სისტემური
        sans: ["var(--font-noto-georgian)", "var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;