
export const CarritoModal = ({
  miLista,
  setPanelAbierto,
  agregarVinilo,
  vaciarLista,
}) => {
  return (
    // contenedor
    <div className="fixed inset-0 z-30 bg-black/50" onClick={setPanelAbierto}>
      {/* segundo contenedor */}
      <div
        className="fixed top-16 right-0 h-[calc(100vh-4rem)] w-full sm:w-96 bauhaus-surface bauhaus-border 
            flex flex-col z-40 shadow-2xl"
        onClick={(clickPanel) => clickPanel.stopPropagation()}
      >
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
          {miLista.map((vinilo) => {
            return (
              <div
                key={vinilo.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 bauhaus-border-b px-4 sm:px-6 gap-1 sm:gap-3"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-bold truncate text-sm sm:text-base">
                    {vinilo.nombre}
                  </p>
                  <p className="text-xs sm:text-sm text-surface-variant truncate">
                    {vinilo.artista}
                  </p>
                </div>
                {/* Btn Quitar vinilo*/}
                <button
                  onClick={() => {
                    agregarVinilo(vinilo);
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

        <button
          onClick={setPanelAbierto}
          aria-label="Cerrar"
          className="btn-secondary bauhaus-interactive px-3 py-1 mx-4 mt-4 mb-2 uppercase tracking-wider text-sm cursor-pointer"
        >
          Cerrar
        </button>

        <button
          onClick={() => {
            vaciarLista();
          }}
          className="w-full btn-primary bauhaus-interactive bauhaus-shadow py-3 font-bold uppercase tracking-wider text-sm cursor-pointer"
        >
          Vaciar Lista
        </button>
      </div>
    </div>
  );
};
