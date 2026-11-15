import { useEffect, useState } from "react";
import { themes, defaultTheme } from "../themes";

const STORAGE_KEY = "theme";

function initialTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (themes.includes(stored)) return stored;
  if (
    themes.includes("light") &&
    window.matchMedia?.("(prefers-color-scheme: light)").matches
  ) {
    return "light";
  }
  return defaultTheme;
}

export default function useTheme() {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return [theme, setTheme];
}
