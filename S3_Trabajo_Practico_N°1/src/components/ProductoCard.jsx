import { useCarritoContexto } from "../context/CarritoContext";
import { formatearPrecio } from "../utils/formato";

export const Card = ({
  nombre,
  artista,
  esAcustica,
  vinilo,
  anio,
  genero,
  precio,
  stock,
}) => {
  const { agregarVinilo, estaEnElCarrito } = useCarritoContexto();
  const estaListada = estaEnElCarrito(vinilo);

  // Boton sin disponibilidad
  let disponibilidad;

  if (stock === 0) {
    disponibilidad = "No disponible";
  } else if (estaListada) {
    disponibilidad = "✓ En mi carrito";
  } else {
    disponibilidad = "+ Agregar";
  }

  const hayStock = stock > 0;

  return (
    <div className="bauhaus-surface bauhaus-border bauhaus-shadow bauhaus-interactive p-4 flex flex-col gap-2 h-full">
      {/* Badge condicional: es acustica*/}
      <div className="flex gap-2 flex-wrap">
        {esAcustica && (
          <span className="px-2 py-1 text-xs font-bold border border-current opacity-70 tracking-wider">
            Acústico
          </span>
        )}
        {/* Badge condicional: disponibilidad */}
        {hayStock ? (
          <span className="tag-ochre px-2 py-1 text-xs font-bold">
            Disponible
          </span>
        ) : (
          <span className="px-2 py-1 text-xs font-bold italic opacity-50">
            Próximamente
          </span>
        )}
      </div>

      <h3 className="font-bold text-base">{nombre}</h3>
      <h4 className="text-sm text-on-surface-variant">{artista}</h4>
      <p className="text-xs text-on-surface-variant">{genero} · {anio}</p>
      <p className="text-lg font-bold text-on-surface">
        {formatearPrecio(precio)}
      </p>
      <p className="text-xs opacity-70">Stock: {stock}</p>

      {/* Btn con condicional ternario */}
      <button
        onClick={() => agregarVinilo(vinilo)}
        disabled={!hayStock || estaListada}
        className={`mt-2 px-4 py-2 font-bold bauhaus-interactive bauhaus-shadow ${estaListada ? "btn-secondary" : "btn-primary"} mt-auto`}
      >
        {disponibilidad}
      </button>
    </div>
  );
};
