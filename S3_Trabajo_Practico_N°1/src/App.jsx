import { useEffect, useState } from "react";
import { BarraNavegacion } from "./components/layout/Navbar";
import { ListaVinilos } from "./components/ProductoList";
import { CarritoModal } from "./components/CarritoModal";
import { useToggle } from "./hooks/useToggle";
import { useMiLista } from "./hooks/onMusic";
import { vinilos } from "./data/item";
import { BarraBusqueda } from "./components/SearchBar";

function App() {

  const { miCarrito, agregarVinilo, vaciarLista } = useMiLista();

  /**
    const {
  carrito,
  cantidadTotal,
  total,
  estaEnElCarrito,
  agregar,
  cambiarCantidad,
  quitar,
  vaciar,
} = useCarrito();
   */

  // BUSCADOR
  const [busqueda, setBusqueda] = useState("");

  // PANEL
  const [panelAbierto, setPanelAbierto] = useToggle(false); // valor boleano o bandera

  useEffect(() => {
    if (miLista.length === 0) {
      document.title = "OnMusic";
    } else {
      document.title = `Mi Lista ${miLista.length} | OnMusic`;
    }
  }, [miLista]);

  return (
    <>
      <div>
        {panelAbierto ? (
          <CarritoModal
            miLista={miLista}
            setPanelAbierto={setPanelAbierto}
            agregarVinilo={agregarVinilo}
            vaciarLista={vaciarLista}
          />
        ) : null}
      </div>
      <div className="sticky top-0 z-50">
        <BarraNavegacion miLista={miLista} setPanelAbierto={setPanelAbierto} />
      </div>
      <div>
        <BarraBusqueda busqueda={busqueda} setBusqueda={setBusqueda} />
      </div>
      <main>
        <div>
          <ListaVinilos
            vinilos={vinilos}
            agregarVinilo={agregarVinilo}
            miLista={miLista}
            busqueda={busqueda}
          />
        </div>
      </main>
    </>
  );
}

export default App;
