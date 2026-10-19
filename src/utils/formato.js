export function formatearPrecio(numero) {
  return numero.toLocaleString('es-AR', {
    style: 'currency', currency: 'ARS', maximumFractionDigits: 0,
  });
}

export const calcularPrecio = (item) => {
  return formatearPrecio(item.precio * item.cantidad); 
}