import { useEffect } from "react";
import { BarraNavegacion } from "./components/layout/Navbar";
import { CarritoModal } from "./components/CarritoModal";
import { useToggle } from "./hooks/useToggle";
import { useCarritoContexto } from "./context/CarritoContext";
import { Tienda } from "./components/views/Tienda";
import { vinilos } from "./data/item";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { Footer } from "./components/layout/Footer";


function App() {
  const { miCarrito, agregarVinilo, vaciarCarrito, carritoTotalUnidades } =
    useCarritoContexto();

  // PANEL
  const [panelAbierto, setPanelAbierto] = useToggle(false); // valor boleano o bandera

  useEffect(() => {
    if (carritoTotalUnidades === 0) {
      document.title = "OnMusic";
    } else {
      document.title = `Mi Carrito ${carritoTotalUnidades} | OnMusic`;
    }
  }, [miCarrito]);

  return (
    <>
      <div>
        {panelAbierto ? (
          <CarritoModal setPanelAbierto={setPanelAbierto} />
        ) : null}
      </div>
      <div className="sticky top-0 z-50">
        <BarraNavegacion setPanelAbierto={setPanelAbierto} />
      </div>
      <div>
        <Tienda vinilos={vinilos} />
      </div>
      <div>
        <ThemeSwitcher/>
      </div>
      <div><Footer/></div>
    </>
  );
}

export default App;
