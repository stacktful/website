import useLanguage from "../hooks/useLanguage";
import useTheme from "../hooks/useTheme";
import { FallbackThemeIcon, themeIcons, themes } from "../themes";

import "./ThemeToggle.css";

function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  const index = themes.indexOf(theme);
  const next = themes[(index + 1) % themes.length];
  const { site } = useLanguage();
  const themeName = (name) => site.theme.names[name] ?? name;

  return (
    <button
      className="btn-theme"
      style={{ "--theme-index": index }}
      onClick={() => setTheme(next)}
      aria-label={site.theme.toggle(themeName(theme))}
      title={site.theme.switchTo(themeName(next))}
    >
      <span className="btn-theme-knob" />
      {themes.map((name) => {
        const Icon = themeIcons[name] ?? FallbackThemeIcon;
        return (
          <span
            key={name}
            className={`btn-theme-slot${name === theme ? " active" : ""}`}
          >
            <Icon />
          </span>
        );
      })}
    </button>
  );
}

export default ThemeToggle;
