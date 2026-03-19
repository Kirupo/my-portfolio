import { useEffect, useState } from "react";
import { applyTheme, getInitialTheme, THEMES, THEME_STORAGE_KEY } from "../utils/theme";

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);

    document.body.classList.add("theme-transition");
    const timer = window.setTimeout(() => {
      document.body.classList.remove("theme-transition");
    }, 350);

    return () => {
      window.clearTimeout(timer);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK));
  };

  return {
    theme,
    isDark: theme === THEMES.DARK,
    toggleTheme,
    setTheme,
  };
}
