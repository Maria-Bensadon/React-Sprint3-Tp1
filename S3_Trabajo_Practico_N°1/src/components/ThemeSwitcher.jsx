import { useThemeContext } from "../context/ThemeContext";

export const ThemeSwitcher = () => {
  const { modoOscuro, temaOpuesto } = useThemeContext();

  return (
    <button type="button" onClick={temaOpuesto}>
      {modoOscuro ? "☀️" : "🌑"}
    </button>
  );
};
