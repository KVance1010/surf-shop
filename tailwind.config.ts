import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        contrast: "var(--contrast)",
        highContrast: "var(--hight-contrast)"
      },
      fontFamily: {
        titleFont: ["var(--font-poppins)", "Roboto", "Arial", "Helvetica", "sans-serif"],
        subTitle: ["var(--font-montserrat)", "Open Sans", "Segoe UI", "Tahoma", "sans-serif"],
        font: ["var(--font-lato)", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif"]
      },
      fontSize: {
        base: ["1.1875rem", { lineHeight: "1.5rem" }],
        sm: ["1rem", { lineHeight: "1.25rem" }],
        md: ["1.5rem", { lineHeight: "1.5rem" }],
        lg: ["2rem", { lineHeight: "1.75rem" }],
        xl: ["2.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["3rem", { lineHeight: "2rem" }],
        "3xl": ["4rem", { lineHeight: "2.25rem" }]
      }
    }
  },
  plugins: []
} satisfies Config;
