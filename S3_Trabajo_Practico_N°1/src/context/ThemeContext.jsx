import { Children, createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

//const tema = "app:tema";

// contexto
const ThemeContext = createContext(null); 

// provider
export const ThemeProvider = ({children}) => {

  //const [modoOscuro, setModoOscuro] = useState(() => {
  //  return useLocalStorage.getItem(tema) === "oscuro";
  //});

  const [modoOscuro, setModoOscuro] = useLocalStorage("OnMusic:Tema", true); 

  useEffect(() => {
    // localStorage.setItem((tema = modoOscuro ? "oscuro" : "claro"));

    document.documentElement.classList.toggle("light", !modoOscuro);
  }, [modoOscuro]);

  const temaOpuesto = () => setModoOscuro((prev)=> !prev); 
  
  return (
    <ThemeContext.Provider value = {{modoOscuro, temaOpuesto}}>
      {children}
    </ThemeContext.Provider>
  );
};

// consumidor
export const useThemeContext = () => {

  const obtenerContexto = useContext(ThemeContext); 

  if(!obtenerContexto) {
    throw new Error("useThemeContext() tiene que usarse dentro de <ThemeProvider>"); 
  }

  return obtenerContexto; 
}
