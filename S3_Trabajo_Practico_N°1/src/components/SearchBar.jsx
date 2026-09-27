

export const BarraBusqueda = ({ busqueda, setBusqueda }) => {
  return (
    <div className="w-full px-4 py-3 bauhaus-surface">
      <label className="sr-only" htmlFor="buscador">
        Buscar vinilo 🖤💿
      </label>

      <input
        id="buscador"
        type="text"
        placeholder="buscar cancion"
        className="w-full px-4 py-2 bauhaus-border bauhaus-surface text-on-surface-variant rounded-lg outline-none focus:border-(--color-primary)"
        value={busqueda}
        // Evento
        onChange={(evento) => {
          setBusqueda(evento.target.value);
        }}
      />
    </div>
  );
};



