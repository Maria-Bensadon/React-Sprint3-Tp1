import { useEffect, useState } from "react";
import { BarraNavegacion } from "./components/layout/Navbar";
import { CarritoModal } from "./components/CarritoModal";
import { useToggle } from "./hooks/useToggle";
import { useCarritoContexto } from "./context/CarritoContext";
import { Tienda } from "./components/views/Tienda";
import { vinilos } from "./data/item";
import { Footer } from "./components/layout/Footer";
import { Formulario } from "./components/views/Checkout";
import { Confirmacion } from "./components/views/Confirmacion";
import { VISTAS } from "./data/vistas";

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

  // seria el data
  const [pedido, setPedido] = useState(null);

  const [vista, setVista] = useState(VISTAS.TIENDA);

  const confirmar = (pedido) => {
    setPedido(pedido);
    setVista(VISTAS.CONFIRMACION);
  };

  const atras = () => {
    setVista(VISTAS.TIENDA);
  };

  const irAlFormulario = () => {
    //console.log("entro");
    setPanelAbierto();
    setVista(VISTAS.CHECKOUT);
  };

  return (
    <>
      <>
        {panelAbierto ? (
          <CarritoModal
            setPanelAbierto={setPanelAbierto}
            irAlFormulario={irAlFormulario}
          />
        ) : null}
      </>
      <header className="sticky top-0 z-50">
        <BarraNavegacion setPanelAbierto={setPanelAbierto} />
      </header>
      <main>
        {vista === VISTAS.TIENDA && <Tienda />}
        {vista === VISTAS.CHECKOUT && <Formulario onConfirmar={confirmar} />}
        {vista === VISTAS.CONFIRMACION && (
          <Confirmacion nombre={pedido.nombre} atras={atras} />
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
