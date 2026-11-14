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
        cream: {
          50: "#FCFAF6",
          100: "#FAF7F2",
          200: "#F4EFE6",
          300: "#EAE2D4",
          400: "#D8CDBE",
        },
        espresso: {
          950: "#140F0D",
          900: "#1C1614",
          800: "#2B221E",
          700: "#443630",
          600: "#5E4B43",
          500: "#7C665C",
          400: "#A38F85",
        },
        diner: {
          red: {
            DEFAULT: "#A83824",
            hover: "#8E2B19",
            light: "#FAECE9",
          },
          honey: {
            DEFAULT: "#D49B35",
            hover: "#BA8220",
            light: "#FDF5E6",
          },
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 12px -2px rgba(28, 22, 20, 0.04)",
        card: "0 8px 24px -4px rgba(28, 22, 20, 0.07)",
        elevated: "0 16px 36px -6px rgba(28, 22, 20, 0.11)",
      },
    },
  },
  plugins: [],
};
export default config;
