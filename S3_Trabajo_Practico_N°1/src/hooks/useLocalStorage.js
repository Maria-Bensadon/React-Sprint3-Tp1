

import { useEffect, useState } from "react";

export const useLocalStorage = (clave, vector) => {

    const [valor, setValor] = useState(() => {
        // inicialización lazy
        try {
            const recuperado = localStorage.getItem(clave);
            if (recuperado) {
                return JSON.parse(recuperado);
            } else {
                return vector;
            }
        } catch (error) {
            return vector;
        }
    });

    // Guardado
    useEffect(() => {
        const estadoJSON = JSON.stringify(valor);

        localStorage.setItem(clave, estadoJSON);
        // console.log(`Guardado exitosamente bajo el nombre: ${clave}`);
    }, [valor]);

    return [valor, setValor];
}


