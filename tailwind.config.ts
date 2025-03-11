import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "581px",
        md: "660px",
        mdl: "895px",
        lg: "1094px",
        xl: "1280px",
        "2xl": "1536px"
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)"
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)"
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)"
        },
        contrast: "var(--contrast)",
        background: {
          DEFAULT: "var(--background)",
          dark: "var(--background-dark)"
        },
        foreground: {
          DEFAULT: "var(--foreground)",
          dark: "var(--foreground-dark)"
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)"
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)"
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        blue: "var(--blue)"
      },
      fontFamily: {
        sans: ["var(--font-body)", ...fontFamily.sans],
        title: ["var(--font-title)", ...fontFamily.sans],
        subtitle: ["var(--font-subtitle)", ...fontFamily.sans]
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      fontSize: {
        // base	1.1875rem	19px
        base: ["1.1875rem", { lineHeight: "1.5rem" }],
        // sm	1rem	16px
        sm: ["1rem", { lineHeight: "1.25rem" }],
        // md	1.5rem	24px
        md: ["1.5rem", { lineHeight: "1.5rem" }],
        // lg	2rem	32px
        lg: ["2.38rem", { lineHeight: "2rem" }],
        // xl	2.25rem	36px
        xl: ["2.25rem", { lineHeight: "2rem" }],
        // 2xl	3rem	48px
        "2xl": ["3rem", { lineHeight: "2rem" }],
        // 3xl	4rem	64px
        "3xl": ["4rem", { lineHeight: "2.25rem" }]
      },
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite"
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(calc(-50% - 40px))" }
        }
      },
      backgroundImage: {
        "parallax-pipe": "url('/pipe.webp')"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
