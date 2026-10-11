import { useCarritoContexto } from "../context/CarritoContext";
import { Modal } from "./ui/Modal";
import { formatearPrecio } from "../utils/formato";

export const CarritoModal = ({ setPanelAbierto }) => {
  const { miCarrito, vaciarCarrito, totalPrecio, quitar, cambiarCantidad } =
    useCarritoContexto();

  return (
    <Modal setPanelAbierto={setPanelAbierto}>
      {/** Condicional */}
      {miCarrito.length === 0 ? (
        <p
          className="text-on-surface-variant text-center 
                mt-8 px-6 opacity-60 text-sm"
        >
          ✨ Todavía no agregaste ningún vinilo ✨
        </p>
      ) : null}

      {/** Funcion map para renderizar la nueva vista */}
      <div className="flex-1 overflow-y-auto">
        {miCarrito.map((vinilo) => {
          return (
            <div
              key={vinilo.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 bauhaus-border-b px-4 sm:px-6 gap-1 sm:gap-3"
            >
              <div className="flex-1 min-w-0">
                <p className="font-bold truncate text-sm sm:text-base">
                  {vinilo.nombre}
                </p>
                <p className="text-xs sm:text-sm text-on-surface-variant truncate">
                  {vinilo.artista}
                </p>
                {/***** Botones Cantidades *****/}
                <p className="text-xs text-on-surface-variant italic">
                  Máx. {vinilo.stock}
                </p>
                <div className="flex items-center gap-4 mt-2 mb-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => cambiarCantidad(vinilo.id, -1)}
                      className="btn-secondary bauhaus-interactive w-8 h-8 flex items-center justify-center font-bold cursor-pointer"
                    >
                      -
                    </button>

                    <span className="w-6 text-center font-bold">
                      {vinilo.cantidad}
                    </span>

                    <button
                      disabled={vinilo.cantidad >= vinilo.stock}
                      onClick={() => cambiarCantidad(vinilo.id, 1)}
                      className="btn-secondary bauhaus-interactive w-8 h-8 flex items-center justify-center font-bold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      +
                    </button>
                  </div>

                  <p className="font-bold">
                    {formatearPrecio(vinilo.precio * vinilo.cantidad)}
                  </p>
                </div>
              </div>
              {/***** Boton Quitar Cancion *****/}
              <button
                onClick={() => {
                  quitar(vinilo.id);
                }}
                className="shrink-0 self-end sm:self-auto text-error text-xs sm:text-sm uppercase tracking-wider underline underline-offset-4 cursor-pointer hover:opacity-70"
              >
                Quitar
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between px-4 sm:px-6 py-3 bauhaus-border-t mb-2">
        <p className="font-bold uppercase tracking-wider text-sm">Total</p>
        <p className="font-bold text-lg">{formatearPrecio(totalPrecio)}</p>
      </div>

      {/****** Botones: Cerrar y Vaciar Lista ******/}
      <>
        <div className="flex flex-col gap-2 px-4 sm:px-6 pb-4">
          <button
            onClick={setPanelAbierto}
            aria-label="Cerrar"
            className="w-full btn-secondary bauhaus-interactive py-2 uppercase tracking-wider text-sm cursor-pointer"
          >
            Cerrar
          </button>

          <button
            onClick={() => {
              vaciarCarrito();
            }}
            className="w-full btn-primary bauhaus-interactive bauhaus-shadow py-3 font-bold uppercase tracking-wider text-sm cursor-pointer"
          >
            Vaciar Lista
          </button>
        </div>
      </>
    </Modal>
  );
};
