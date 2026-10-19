import { useState } from "react";
import { BarraBusqueda } from "../SearchBar";
import { ListaVinilos } from "../ProductoList";
import { vinilos } from "../../data/item.js";

export const Tienda = () => {
  const [busqueda, setBusqueda] = useState("");

  return (
    <>
      <div>
        <BarraBusqueda busqueda={busqueda} setBusqueda={setBusqueda} />
      </div>
      <section>
        <div>
          <ListaVinilos vinilos={vinilos} busqueda={busqueda} />
        </div>
      </section>
    </>
  );
};
