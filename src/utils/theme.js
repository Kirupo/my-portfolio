export const THEME_STORAGE_KEY = "portfolio-theme";

export const THEMES = {
  DARK: "dark",
  LIGHT: "light",
};

export function getInitialTheme() {
  if (typeof window === "undefined") return THEMES.DARK;

  const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === THEMES.DARK || saved === THEMES.LIGHT) return saved;

  return THEMES.DARK;
}

export function applyTheme(theme) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  root.classList.toggle("dark", theme === THEMES.DARK);
  root.dataset.theme = theme;
}

