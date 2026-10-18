// resumen + formulario
import { useForm, Watch } from "react-hook-form";

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

export const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // Configuración inicial del formulario
    defaultValues: {
      metodoEnvio: "retiro", // El método de envío arranca seleccionado en 'retiro'
    },
    shouldUnregister: true, // Si un campo condicional se oculta, se borra automáticamente de los datos
  });

  const metodoEnvio = watch("metodoEnvio");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Nombre Completo: </label>
        <input
          type="text"
          {...register("nombre", {
            required: "El nombre es obligatorio",
            minLength: { value: 3, message: "Debe tener como mínimo 3 letras" },
          })}
          placeholder="Nombre Completo"
        />

        {errors.nombre && <p>{errors.nombre.message}</p>}
      </div>
      {/* ---------------------------- */}
      <div>
        <label>Email: </label>
        <input
          type="text"
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Formato de correo inválido",
            },
          })}
          placeholder=" Email"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      {/* ---------------------------- */}
      <div>
        <label>Telefono: </label>
        <input
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
          placeholder=" Teléfono"
        />
        {errors.telefono && <p>{errors.telefono.message}</p>}
      </div>
      {/* ---------------------------- */}
      <div>
        <label>Método de Envío: </label>
        <input
          type="radio"
          value="retiro"
          {...register("metodoEnvio", {
            required: "El método de envío es obligatorio",
          })}
        />
        {errors.metodo && <p>{errors.metodo.message}</p>}
        {/* ---- */}
        <label>Retiro en tienda</label>
        <input type="radio" value="domicilio" {...register("metodoEnvio")} />
        {errors.direccion && <p>{errors.direccion.message}</p>}

        {/* ----------- CONDICIONAL ------------ */}
        <label>Envío a domicilio</label>
        {metodoEnvio === "domicilio" && (
          <>
            <input
              type="text"
              {...register("direccion", {
                required: "La direccion es obligatorio",
              })}
            />
            {errors.direccion && <p>{errors.direccion.message}</p>}
          </>
        )}
      </div>
      {/* ---------------------------- */}
      <textarea
        placeholder="Notas (opcional)"
        {...register("notas", {
          maxLength: { value: 200, message: "Máximo 200 caracteres" },
        })}
      />
      {errors.notas && <p>{errors.notas.message}</p>}

      {/* ---------------------------- */}
      <div>
        <label>Acepto los términos </label>
        <input
          type="checkbox"
          {...register("terminos", {
            required: "Debe aceptar los términos y condiciones",
          })}
        />
        {errors.terminos && <p>{errors.terminos.message}</p>}
      </div>
      <button type="submit">Confirmar pedido</button>
    </form>
  );
};
