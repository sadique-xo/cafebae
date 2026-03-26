import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          ink: "#1c1917",
          canvas: "#fafaf8",
          paper: "#ffffff",
          muted: "#f0ebe4",
          border: "#e7e2d9",
          yellow: "#c9a000",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        destructive: "var(--destructive)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) + 2px)",
        sm: "calc(var(--radius) - 2px)",
      },
      boxShadow: {
        glow:
          "0 0 0 1px rgba(201, 160, 0, 0.2), 0 8px 24px rgba(201, 160, 0, 0.12)",
        "glow-sm": "0 0 0 1px rgba(201, 160, 0, 0.15), 0 4px 12px rgba(201, 160, 0, 0.08)",
        "glow-lg":
          "0 0 0 1px rgba(201, 160, 0, 0.25), 0 12px 40px rgba(201, 160, 0, 0.15)",
        block: "4px 4px 0 0 rgba(28, 25, 23, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
