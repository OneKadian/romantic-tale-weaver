import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FF8FAB",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#E5DEFF",
          foreground: "#4A154B",
        },
        accent: {
          DEFAULT: "#FFE5E5",
          foreground: "#4A154B",
        },
      },
      fontFamily: {
        cursive: ["Dancing Script", "cursive"],
      },
      keyframes: {
        "carousel-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "carousel-right": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "carousel-left": "carousel-left 0.4s ease-out",
        "carousel-right": "carousel-right 0.4s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;