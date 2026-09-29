export const Modal = ({ setPanelAbierto, children }) => {
  return (
    // contenedor
    <div className="fixed inset-0 z-30 bg-black/50" onClick={setPanelAbierto}>
      {/* segundo contenedor */}
      <div
        className="fixed top-16 right-0 h-[calc(100vh-4rem)] w-full sm:w-96 bauhaus-surface bauhaus-border 
            flex flex-col z-40 shadow-2xl"
        onClick={(clickPanel) => clickPanel.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
