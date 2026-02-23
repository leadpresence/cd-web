import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D8B7E",
          light: "#4FA399",
          dark: "#1F6258",
          50: "#EDF7F5",
          100: "#D4EDE9",
          200: "#A8DBD3",
        },
        secondary: {
          DEFAULT: "#D4A574",
          light: "#E2B896",
          dark: "#C29455",
        },
        accent: {
          yellow: "#F4D49F",
          "yellow-dark": "#E8C484",
        },
        status: {
          taken: "#2D8B7E",
          late: "#F4D49F",
          missed: "#C85A54",
          pending: "#9B9B9B",
        },
        surface: {
          DEFAULT: "#FAFAF8",
          alt: "#F5F3F0",
          card: "#FFFFFF",
        },
        txt: {
          DEFAULT: "#2C2C2C",
          secondary: "#6B6B6B",
          tertiary: "#9B9B9B",
        },
        border: {
          DEFAULT: "#E8E5E1",
          medium: "#DCDAD5",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.04), 0 6px 16px rgba(0,0,0,0.04)",
        "card-hover":
          "0 2px 8px rgba(0,0,0,0.06), 0 12px 28px rgba(0,0,0,0.07)",
        soft: "0 2px 12px rgba(45,139,126,0.08)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-down": "fadeInDown 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          from: { opacity: "0", transform: "translateY(-16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
