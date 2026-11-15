import { HiMiniMoon, HiMiniSun, HiMiniSwatch } from "react-icons/hi2";
import "./dark.css";
import "./light.css";

// Registry of available themes. Add a new theme by creating <name>.css,
// importing it above and listing its name here (and optionally an icon).
export const themes = ["dark", "light"];
export const defaultTheme = "dark";

export const themeIcons = {
  dark: HiMiniMoon,
  light: HiMiniSun,
};
export const FallbackThemeIcon = HiMiniSwatch;
