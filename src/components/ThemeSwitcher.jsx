import { useThemeContext } from "../context/ThemeContext";

export const ThemeSwitcher = () => {
  const { modoOscuro, temaOpuesto } = useThemeContext();

  return (
    <button type="button" aria-label="Cambiar tema" onClick={temaOpuesto}>
      {modoOscuro ? "☀️" : "🌑"}
    </button>
  );
};
