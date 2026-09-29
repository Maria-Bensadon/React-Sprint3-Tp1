import { Modal } from "./ui/Modal";

export const CarritoModal = ({
  miLista,
  setPanelAbierto,
  agregarVinilo,
  vaciarLista,
}) => {
  return (
    <Modal setPanelAbierto={setPanelAbierto}>
      {/** Condicional */}
      {miLista.length === 0 ? (
        <p
          className="text-on-surface-variant text-center 
                mt-8 px-6 opacity-60 text-sm"
        >
          ✨ Todavía no agregaste ninguna canción ✨
        </p>
      ) : null}

      {/** Funcion map para renderizar la nueva vista */}
      <div className="flex-1 overflow-y-auto">
        {miLista.map((cancion) => {
          return (
            <div
              key={cancion.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 bauhaus-border-b px-4 sm:px-6 gap-1 sm:gap-3"
            >
              <div className="flex-1 min-w-0">
                <p className="font-bold truncate text-sm sm:text-base">
                  {cancion.nombre}
                </p>
                <p className="text-xs sm:text-sm text-surface-variant truncate">
                  {cancion.artista}
                </p>
              </div>
              {/* Btn Quitar Cancion*/}
              <button
                onClick={() => {
                  agregarCancion(cancion);
                }}
                className="btn-secondary bauhaus-interactive px-3 py-1 text-xs sm:text-sm shrink-0 uppercase tracking-wider cursor-pointer self-end sm:self-auto"
              >
                Quitar
              </button>
            </div>
          );
        })}
      </div>

      {/* Botones*/}
      <>
        <button
          onClick={setPanelAbierto}
          aria-label="Cerrar"
          className="btn-secondary bauhaus-interactive px-3 py-1 mx-4 mt-4 mb-2 uppercase tracking-wider text-sm cursor-pointer"
        >
          Cerrar
        </button>
      </>
      <>
        <button
          onClick={() => {
            vaciarLista();
          }}
          className="w-full btn-primary bauhaus-interactive bauhaus-shadow py-3 font-bold uppercase tracking-wider text-sm cursor-pointer"
        >
          Vaciar Lista
        </button>
      </>
    </Modal>
  );
};
