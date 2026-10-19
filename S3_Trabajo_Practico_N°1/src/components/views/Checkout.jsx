// resumen + formulario
import { useForm } from "react-hook-form";
import { useCarritoContexto } from "../../context/CarritoContext";
import { calcularPrecio, formatearPrecio } from "../../utils/formato";

// Clases que se repiten en todos los campos
const claseCampo = "flex flex-col gap-1";
const claseEtiqueta = "text-sm font-bold";
const claseInput =
  "w-full bg-surface-container-lowest text-on-surface border-2 border-outline px-3 py-2 placeholder:text-on-surface-variant placeholder:opacity-30  italic placeholder:text-sm focus-visible:outline-2 focus-visible:outline-primary aria-invalid:border-error";
const claseError = "text-sm text-error";

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

  const onSubmit = (data) => {
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
    <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      {/* ---- Resumen ---- */}
      <section className="bauhaus-surface bauhaus-border bauhaus-shadow p-4">
        <h2 className="font-bold text-xl mb-4">Resumen</h2>

        {miCarrito.map((vinilo) => (
          <div
            key={vinilo.id}
            className="flex items-start justify-between gap-4 py-2 border-b border-outline-variant"
          >
            <p className="text-sm">
              {vinilo.nombre}{" "}
              <span className="text-on-surface-variant">
                × {vinilo.cantidad}
              </span>
            </p>
            <p className="text-sm font-bold shrink-0">
              {calcularPrecio(vinilo)}
            </p>
          </div>
        ))}

        <p className="flex justify-between mt-4 text-lg font-bold">
          <span>Total a pagar</span>
          <span>{formatearPrecio(totalPrecio)}</span>
        </p>
      </section>

      {/* ====== Formulario ====== */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bauhaus-surface bauhaus-border bauhaus-shadow p-4 flex flex-col gap-4"
      >
        {/* ... Nombre ... */}
        <div className={claseCampo}>
          <label htmlFor="nombre" className={claseEtiqueta}>
            Nombre Completo
          </label>
          <input
            id="nombre"
            aria-invalid={errors.nombre ? "true" : "false"}
            aria-describedby="error-nombre"
            type="text"
            className={claseInput}
            {...register("nombre", {
              required: "El nombre es obligatorio",
              minLength: {
                value: 3,
                message: "Debe tener como mínimo 3 letras",
              },
            })}
            placeholder="Ingrese su nombre y apellido"
          />
          {errors.nombre && (
            <p id="error-nombre" className={claseError}>
              {errors.nombre.message}
            </p>
          )}
        </div>
        {/* ... Email ... */}
        <div className={claseCampo}>
          <label htmlFor="email" className={claseEtiqueta}>
            Email
          </label>
          <input
            id="email"
            aria-invalid={errors.email ? "true" : "false"} // narrador
            aria-describedby="error-email" // indica el elemento
            type="text"
            className={claseInput}
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Formato de correo inválido",
              },
            })}
            placeholder="Ingrese su correo electrónico"
          />
          {errors.email && (
            <p id="error-email" className={claseError}>
              {errors.email.message}
            </p>
          )}
        </div>
        {/* ... Telefono ... */}
        <div className={claseCampo}>
          <label htmlFor="telefono" className={claseEtiqueta}>
            Telefono
          </label>
          <input
            id="telefono"
            type="text"
            className={claseInput}
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
          {errors.telefono && (
            <p className={claseError}>{errors.telefono.message}</p>
          )}
        </div>
        {/* ... Metodo de envio ... */}
        <fieldset className={claseCampo}>
          <legend className={claseEtiqueta}>Método de Envío</legend>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-1">
            <div className="flex items-center gap-2">
              <input
                id="envio-retiro"
                type="radio"
                value="retiro"
                className="accent-primary"
                {...register("metodoEnvio", {
                  required: "El método de envío es obligatorio",
                })}
              />
              <label htmlFor="envio-retiro" className="text-sm">
                Retiro en tienda
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                id="envio-domicilio"
                type="radio"
                value="domicilio"
                className="accent-primary"
                {...register("metodoEnvio")}
              />
              <label htmlFor="envio-domicilio" className="text-sm">
                Envío a domicilio
              </label>
            </div>
          </div>

          {errors.metodoEnvio && (
            <p className={claseError}>{errors.metodoEnvio.message}</p>
          )}
        </fieldset>

        {/* ----------- CONDICIONAL ------------ */}
        {metodoEnvio === "domicilio" && (
          <div className={claseCampo}>
            <label htmlFor="direccion" className={claseEtiqueta}>
              Domicilio
            </label>
            <input
              id="direccion"
              type="text"
              className={claseInput}
              {...register("direccion", {
                required: "La direccion es obligatorio",
              })}
              placeholder="Ingrese su domicilio"
            />
            {errors.direccion && (
              <p className={claseError}>{errors.direccion.message}</p>
            )}
          </div>
        )}
        {/* ... Notas ... */}
        <div className={claseCampo}>
          <label htmlFor="notas" className={claseEtiqueta}>
            Notas
          </label>
          <textarea
            id="notas"
            placeholder="opcional"
            className={`${claseInput} min-h-24 resize-y`}
            {...register("notas", {
              maxLength: { value: 200, message: "Máximo 200 caracteres" },
            })}
          />
          {errors.notas && <p className={claseError}>{errors.notas.message}</p>}
        </div>

        {/* ... Terminos y condiciones ... */}
        <div className={claseCampo}>
          <div className="flex items-center gap-2">
            <input
              id="terminos"
              type="checkbox"
              className="accent-primary"
              {...register("terminos", {
                required: "Debe aceptar los términos y condiciones",
              })}
            />
            <label htmlFor="terminos" className="text-sm">
              Acepto los términos y condiciones
            </label>
          </div>
          {errors.terminos && (
            <p className={claseError}>{errors.terminos.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full btn-primary bauhaus-interactive bauhaus-shadow py-3 font-bold uppercase tracking-wider text-sm cursor-pointer"
        >
          Confirmar pedido
        </button>
      </form>
    </div>
  );
};
