import useTheme from "../hooks/useTheme";
import { FallbackThemeIcon, themeIcons, themes } from "../themes";

function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  const index = themes.indexOf(theme);
  const next = themes[(index + 1) % themes.length];

  return (
    <button
      className="btn-theme"
      style={{ "--theme-index": index }}
      onClick={() => setTheme(next)}
      aria-label={`Switch color theme (current: ${theme})`}
      title={`Switch to ${next}`}
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
