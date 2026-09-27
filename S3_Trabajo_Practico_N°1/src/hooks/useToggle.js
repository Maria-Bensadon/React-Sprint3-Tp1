
import { useState } from "react"

export const useToggle = (valorInicial) => {

    const [valor, setValor] = useState(valorInicial); 

    const toggle= () => {
        setValor((valor) => !valor);
    };

    return [valor, toggle]; 
}
