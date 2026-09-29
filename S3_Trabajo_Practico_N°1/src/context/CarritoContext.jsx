import { createContext, useContext } from "react";
import { useMiLista } from "../hooks/onMusic";

const MiContext = createContext(null); 

export const CarritoProvider = ({children}) => {

    const valor = useMiLista();

    return(
        <MiContext.Provider value={valor}>
            {children}
        </MiContext.Provider>
    ); 
}

export const useMiCarritoContext = () => {
    const contexto = useContext(MiContext); 

    if(!contexto) {
        throw new Error('useMiCarritoContext() tiene que usarse dentro de <MiContext.Provider>'); 
    }

    return contexto; 
}