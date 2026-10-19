export const BarraBusqueda = ({ busqueda, setBusqueda }) => {
  return (
    <div className="w-full px-4 py-3 bauhaus-surface">
      <input
        id="buscador"
        type="text"
        placeholder="Buscar vinilo por nombre"
        className="w-full px-4 py-2 bauhaus-border bauhaus-surface text-on-surface-variant rounded-lg outline-none italic focus:border-(--color-primary) placeholder:opacity-40 "
        value={busqueda}
        // Evento
        onChange={(evento) => {
          setBusqueda(evento.target.value);
        }}
      />
    </div>
  );
};
