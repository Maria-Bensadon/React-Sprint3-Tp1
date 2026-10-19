
// el gracias
export const Confirmacion = ({ nombre, atras }) => {
  return (
    <div>
      <p>{nombre}, recibimos tu pedido ☺️ </p>
      <h2>¡Gracias por tu compra!</h2>
      <button onClick={atras}>Volver a la tienda</button>
    </div>
  );
};

