import { useLocalStorage } from "./useLocalStorage";

export const useMiLista = () => {

    // lista personal
    const [miLista, setMiLista] = useLocalStorage('OnMusic:MiLista', []);

    // TOGGLE
    const agregarVinilo = (vinilos) => {
        setMiLista((lista) => {
            // falta:
            const encontrada = lista.some((item) => item.id === vinilos.id);

            if (encontrada) {
                return lista.filter((item) => item.id !== vinilos.id);
            }

            // agrega la vinilos al array
            return [...lista, vinilos];
        });
    };

    // Vaciar lista
    const vaciarLista = () => {
        if (confirm('Deseas eliminar la lista personal')) {
            setMiLista([]);
            localStorage.removeItem('OnMusic:MiLista');
        }
    }

    return { miLista, agregarVinilo, vaciarLista };
}

