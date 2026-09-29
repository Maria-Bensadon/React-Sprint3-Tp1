import { useLocalStorage } from "./useLocalStorage";

export const useMiCarrito = () => {
  // carrito
  const [miCarrito, setMiCarrito] = useLocalStorage("OnMusic:Micarrito", []);

  // TOGGLE: agrega
  const agregarVinilo = (vinilo) => {
    setMiCarrito((carrito) => {
      // falta:
      const encontrada = carrito.some((item) => item.id === vinilo.id);

      if (encontrada) {
        return carrito.map((item) =>
          item.id === vinilo.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item,
        );
      }

      // agrega la vinilos al array
      return [...carrito, { ...vinilo, cantidad: 1 }];
    });
  };

  // esta en el carrito
  const estaEnElCarrito = (vinilo) =>
    miCarrito.some((item) => item.id === vinilo.id);

  // quitar vinilo
  const quitar = (id) => {
    setMiCarrito((carrito) => carrito.filter((item) => item.id !== id));
  };

  // cambiarCantidad
  const cambiarCantidad = (id, cantidad) => {
    setMiCarrito((carrito) =>
      carrito
        .map((item) =>
          item.id === id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item,
        )
        .filter((item) => item.cantidad > 0),
    );
  };

  // carrito total de unidades
  const carritoTotalUnidades = miCarrito.reduce(
    (total, item) => (total + item.cantidad, 0),
  );

  // total precio
  const totalPrecio = miCarrito.reduce(
    (total, item) => (total + item.precio * item.cantidad, 0),
  );

  // Vaciar carrito
  const vaciarCarrito = () => {
    if (confirm("Deseas eliminar la carrito personal")) {
      setMiCarrito([]);
    }
  };

  return {
    miCarrito,
    agregarVinilo,
    quitar,
    estaEnElCarrito,
    cambiarCantidad,
    carritoTotalUnidades,
    totalPrecio,
    vaciarCarrito,
  };
};
