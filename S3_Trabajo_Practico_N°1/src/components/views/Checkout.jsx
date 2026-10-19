// resumen + formulario
import { useForm } from "react-hook-form";
import { useCarritoContexto } from "../../context/CarritoContext";
import { calcularPrecio, formatearPrecio } from "../../utils/formato";
/**
    El formulario con React Hook Form y 7 campos:

    | Campo               | Tipo     | Validación                                      |
    |---------------------|----------|-------------------------------------------------|
    | Nombre completo     | texto    | obligatorio + mínimo 3 caracteres               |
    | Email               | email    | obligatorio + pattern                           |
    | Teléfono            | texto    | obligatorio + solo números + mínimo 8           |
    | Método de envío     | radio    | uno obligatorio (con defaultValues)             |
    | Dirección           | texto    | condicional: obligatoria solo si es a direccion |
    | Notas               | textarea | opcional, máximo 200 caracteres                 |
    | Acepto los términos | checkbox | obligatorio                                     |

 */

export const Formulario = ({ onConfirmar }) => {
  const { miCarrito, totalPrecio, vaciarCarrito } = useCarritoContexto();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    // Configuración inicial del formulario
    defaultValues: {
      metodoEnvio: "retiro", // El método de envío arranca seleccionado en 'retiro'
    },
  });

  const metodoEnvio = watch("metodoEnvio");

  //
  const onSubmit = (data) => {
    //console.log(data);
    const pedido = {
      nombre: data.nombre,
      email: data.email,
      telefono: data.telefono,
      metodoEnvio: data.metodoEnvio,
      direccion: data.metodoEnvio === "domicilio" ? data.direccion : null,
      notas: data.notas,
      items: miCarrito,
      total: totalPrecio,
    };

    console.log(pedido);
    onConfirmar(pedido);
    vaciarCarrito();
  };

  return (
    <div>
      {/* ---- Resumen ---- */}
      <div>
        <h2>Resumen</h2>
        {miCarrito.map((vinilo) => (
          <div key={vinilo.id}>
            <p>
              {vinilo.nombre} ......... {vinilo.cantidad} Un.
            </p>
            <p>{calcularPrecio(vinilo)}</p>
          </div>
        ))}

        <p>Total A Pagar: {formatearPrecio(totalPrecio)}</p>
      </div>

      {/* ---- Formulario ---- */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="nombre">Nombre Completo: </label>
          <input
            id="nombre"
            aria-invalid={errors.nombre? "true" : "false"}
            aria-describedby="error-nombre"
            type="text"
            {...register("nombre", {
              required: "El nombre es obligatorio",
              minLength: {
                value: 3,
                message: "Debe tener como mínimo 3 letras",
              },
            })}
            placeholder="Ingrese su nombre y apellido"
          />

          {errors.nombre && <p>{errors.nombre.message}</p>}
        </div>
        {/* ---------------------------- */}
        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            aria-invalid={errors.nombre? "true" : "false"} // narrador
            aria-describedby="error-nombre" // indica el elemento
            type="text"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Formato de correo inválido",
              },
            })}
            placeholder="Ingrese su correo electrónico"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        {/* ---------------------------- */}
        <div>
          <label htmlFor="telefono">Telefono: </label>
          <input
            id="telefono"
            type="text"
            {...register("telefono", {
              required: "El telefono es obligatorio",
              pattern: {
                value: /^[0-9]+$/,
                message: "Por favor, ingrese solo números",
              },
              minLength: {
                value: 8,
                message: "El campo debe tener como minimo 8 numeros",
              },
            })}
            placeholder="Ingrese su número de teléfono"
          />
          {errors.telefono && <p>{errors.telefono.message}</p>}
        </div>
        {/* ---------------------------- */}
        <div>
          <label htmlFor="metodoEnvio">Método de Envío: </label>
          <input
            id="metodoEnvio"
            type="radio"
            value="retiro"
            {...register("metodoEnvio", {
              required: "El método de envío es obligatorio",
            })}
          />
          {errors.metodo && <p>{errors.metodo.message}</p>}
          {/* ---- */}
          <label htmlFor="retiro1">Retiro en tienda</label>
          <input
            id="retiro1"
            type="radio"
            value="domicilio"
            {...register("metodoEnvio")}
          />
          {errors.direccion && <p>{errors.direccion.message}</p>}

          {/* ----------- CONDICIONAL ------------ */}
          <label>Envío a domicilio</label>
          {metodoEnvio === "domicilio" && (
            <>
              <label htmlFor="retiro2">Domicilio</label>
              <input
                id="retiro2"
                type="text"
                {...register("direccion", {
                  required: "La direccion es obligatorio",
                })}
                placeholder="Ingrese su domicilio"
              />
              {errors.direccion && <p>{errors.direccion.message}</p>}
            </>
          )}
        </div>
        {/* ---------------------------- */}
        <label htmlFor="notas">Notas:</label>
        <textarea
          id="notas"
          placeholder="opcional"
          {...register("notas", {
            maxLength: { value: 200, message: "Máximo 200 caracteres" },
          })}
        />
        {errors.notas && <p>{errors.notas.message}</p>}

        {/* ---------------------------- */}
        <div>
          <label htmlFor="terminos">Acepto los términos y condiciones</label>
          <input
            id="terminos"
            type="checkbox"
            {...register("terminos", {
              required: "Debe aceptar los términos y condiciones",
            })}
          />
          {errors.terminos && <p>{errors.terminos.message}</p>}
        </div>
        <button type="submit">Confirmar pedido</button>
      </form>
    </div>
  );
};
