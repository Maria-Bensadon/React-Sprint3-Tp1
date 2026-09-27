

export const BarraNavegacion = ({ miLista, setPanelAbierto }) => {
  return (
    
    <nav className="flex items-center justify-between px-6 py-4 bauhaus-border-b bauhaus-surface">
      <h1 className="font-bold text-xl" style={{ fontFamily: 'var(--font-display-lg)' }}>
        OnMusic
      </h1>
      <button
        onClick={setPanelAbierto}
        className="btn-primary bauhaus-interactive bauhaus-shadow px-4 py-2 font-bold uppercase tracking-wider text-sm rounded-none cursor-pointer"
      >
        MiLista ({miLista.length > 0 ? <span>{miLista.length}</span> : null})
      </button>
    </nav>
  );
};