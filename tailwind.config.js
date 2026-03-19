/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Orbitron", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        surface: "var(--card-color)",
        fg: "var(--text-color)",
        muted: "var(--muted-color)",
        accent: "var(--accent-color)",
        accentSecondary: "var(--accent-secondary)",
      },
      boxShadow: {
        glow: "var(--glow-shadow)",
        soft: "var(--soft-shadow)",
      },
    },
  },
  plugins: [],
};
