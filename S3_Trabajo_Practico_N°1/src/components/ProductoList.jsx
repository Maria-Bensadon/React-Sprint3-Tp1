import { Card } from "./ProductoCard";

export const ListaVinilos = ({ vinilos, busqueda }) => {
  // vinilos filtrados para el Buscador
  const vinilosFiltrados = vinilos.filter((vinilo) =>
    vinilo.nombre.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <article className="px-6 py-6">
      <h2 className="font-bold text-xl mb-6">Lista de vinilos disponibles</h2>

      {vinilosFiltrados.length === 0 && (
        <p className="text-on-surface-variant text-center mt-8">
          No encontramos nada para "{busqueda}" 🎵
        </p>
      )}

      <div
        className="grid grid-cols-1 sm:grid-cols-2 
            lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        {vinilosFiltrados.map((vinilo) => (
          <Card
            key={vinilo.id}
            nombre={vinilo.nombre}
            artista={vinilo.artista}
            genero={vinilo.genero}
            anio={vinilo.anio}
            vinilo={vinilo}
            esAcustica={vinilo.esAcustica}
            precio={vinilo.precio}
            stock={vinilo.stock}
          />
        ))}
      </div>
    </article>
  );
};
