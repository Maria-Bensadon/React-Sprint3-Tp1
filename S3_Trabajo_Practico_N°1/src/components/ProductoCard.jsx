import { formatearPrecio } from "../utils/formato";

export const Card = ({
  nombre,
  artista,
  esAcustica,
  estaListada,
  agregarVinilo,
  vinilo,
  anio,
  genero,
  precio,
  stock,
}) => {
  return (
    <div className="bauhaus-surface bauhaus-border bauhaus-shadow bauhaus-interactive p-4 flex flex-col gap-2">
      {/* BAGDE CONDICIONAL */}
      <div className="flex gap-2 flex-wrap">
        {esAcustica && (
          <span className="px-2 py-1 text-xs font-bold border border-current opacity-70 tracking-wider">
            Acústico
          </span>
        )}
        {stock > 0 ? (
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
      <p className="text-xs text-on-surface-variant">{genero}</p>
      <p className="text-xs text-on-surface-variant">{anio}</p>
      <p className="text-xs text-on-surface-variant">
        {formatearPrecio(precio)}
      </p>

      {/* Btn con condicional ternario */}
      <button
        onClick={() => agregarVinilo(vinilo)}
        className={`mt-2 px-4 py-2 font-bold bauhaus-interactive bauhaus-shadow ${estaListada ? "btn-secondary" : "btn-primary"}`}
      >
        {estaListada ? "✓ En mi lista" : "+ Agregar"}
      </button>
    </div>
  );
};
