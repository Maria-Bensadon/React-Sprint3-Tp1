import { useCarritoContexto } from "../../context/CarritoContext";
import { ThemeSwitcher } from "../ThemeSwitcher";

export const BarraNavegacion = ({ setPanelAbierto }) => {
  const { carritoTotalUnidades } = useCarritoContexto();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bauhaus-border-b bauhaus-surface">
      <h1
        className="font-bold text-xl"
        style={{ fontFamily: "var(--font-display-lg)" }}
      >
        OnMusic
      </h1>
      <div className="flex items-center gap-3">
        <ThemeSwitcher />
        <button
          onClick={setPanelAbierto}
          className="btn-primary bauhaus-interactive bauhaus-shadow px-4 py-2 font-bold uppercase tracking-wider text-sm rounded-none cursor-pointer"
        >
          Carrito 🛒 (
          {carritoTotalUnidades > 0 ? (
            <span>{carritoTotalUnidades}</span>
          ) : null}
          )
        </button>
      </div>
    </nav>
  );
};
