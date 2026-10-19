// el gracias
export const Confirmacion = ({ nombre, atras }) => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <div className="bauhaus-surface bauhaus-border bauhaus-shadow p-20 flex flex-col items-center text-center gap-4">
        <p className="text-on-surface-variant text-2xl">
          Hola {nombre}, ya recibimos tu pedido ☺️
        </p>
        <p className="font-bold text-3xl m-2">¡Muchas gracias por tu compra!</p>

        <button
          onClick={atras}
          className="btn-primary bauhaus-interactive bauhaus-shadow mt-2 px-6 py-1 font-bold uppercase tracking-wider text-sm cursor-pointer"
        >
          Volver a la tienda
        </button>
      </div>
    </section>
  );
};
