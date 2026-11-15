import useTheme from "../hooks/useTheme";
import { themes } from "../themes";

function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  return (
    <select
      className="theme-toggle"
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      aria-label="Color theme"
    >
      {themes.map((name) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
}

export default ThemeToggle;
