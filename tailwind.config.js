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
        glow: "0 0 20px rgba(57, 255, 20, 0.35)",
        soft: "0 20px 45px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
