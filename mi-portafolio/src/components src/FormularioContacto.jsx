
import { useState } from 'react'

export default function FormularioContacto({
  titulo,
  descripcion,
  textoBoton,
  onEnviar,
}) {
  const [valores, setValores] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  })

  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  // Actualiza el campo que se está escribiendo.
  function manejarCambio(evento) {
    const { name, value } = evento.target

    setValores((valoresAnteriores) => ({
      ...valoresAnteriores,
      [name]: value,
    }))

    setEnviado(false)
  }

  // Valida y procesa el formulario.
  function manejarEnvio(evento) {
    evento.preventDefault()

    const nuevosErrores = {}
    const nombre = valores.nombre.trim()
    const correo = valores.correo.trim()
    const mensaje = valores.mensaje.trim()

    if (!nombre) {
      nuevosErrores.nombre = 'El nombre es obligatorio.'
    }

    if (!correo) {
      nuevosErrores.correo = 'El correo electrónico es obligatorio.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      nuevosErrores.correo = 'Ingresa un correo electrónico válido.'
    }

    if (!mensaje) {
      nuevosErrores.mensaje = 'El mensaje es obligatorio.'
    }

    setErrores(nuevosErrores)
    setEnviado(false)

    // Si hay errores, detiene el envío.
    if (Object.keys(nuevosErrores).length > 0) {
      return
    }

    // Conserva la función que ya recibía los datos.
    if (typeof onEnviar === 'function') {
      onEnviar({ nombre, correo, mensaje })
    }

    // Limpia los campos y muestra la confirmación.
    setValores({
      nombre: '',
      correo: '',
      mensaje: '',
    })

    setErrores({})
    setEnviado(true)
  }

  return (
    <section className="formulario-contacto">
      <h1>{titulo}</h1>
      <p>{descripcion}</p>

      <form onSubmit={manejarEnvio} noValidate>
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={valores.nombre}
          onChange={manejarCambio}
          aria-invalid={Boolean(errores.nombre)}
          aria-describedby={errores.nombre ? 'error-nombre' : undefined}
        />
        {errores.nombre && (
          <p id="error-nombre" className="mensaje-error" role="alert">
            {errores.nombre}
          </p>
        )}

        <label htmlFor="correo">Correo electrónico</label>
        <input
          id="correo"
          name="correo"
          type="email"
          value={valores.correo}
          onChange={manejarCambio}
          aria-invalid={Boolean(errores.correo)}
          aria-describedby={errores.correo ? 'error-correo' : undefined}
        />
        {errores.correo && (
          <p id="error-correo" className="mensaje-error" role="alert">
            {errores.correo}
          </p>
        )}

        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          value={valores.mensaje}
          onChange={manejarCambio}
          aria-invalid={Boolean(errores.mensaje)}
          aria-describedby={errores.mensaje ? 'error-mensaje' : undefined}
        />
        {errores.mensaje && (
          <p id="error-mensaje" className="mensaje-error" role="alert">
            {errores.mensaje}
          </p>
        )}

        <button type="submit">{textoBoton}</button>

        {enviado && (
          <p className="mensaje-exito" role="status">
            ¡Formulario enviado correctamente!
          </p>
        )}
      </form>
    </section>
  )
}
