import { createContext, useContext } from "react";
import { useMiCarrito } from "../hooks/useCarrito";

// 1 - Crear el contexto
const ContextoCarrito = createContext(null);

// 2 - Proveedor
export const CarritoProvider = ({ children }) => {

    const valorCarrito = useMiCarrito();

    return (
        <ContextoCarrito.Provider value={valorCarrito}>
            {children}
        </ContextoCarrito.Provider>
    );
};

// 3 - Hook de context
export const useCarritoContexto = () => {

    // guarda el valor de ContextoCarrito en una nueva variable
    const obtenerContexto = useContext(ContextoCarrito);

    if (!obtenerContexto) {
        throw new Error(
            "useCarritoContexto() tiene que usarse dentro de <ContextoCarrito.Provider>",
        );
    }

    return obtenerContexto;
};
