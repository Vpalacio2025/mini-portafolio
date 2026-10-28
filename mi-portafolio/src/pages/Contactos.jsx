import FormularioContacto from '../components src/FormularioContacto.jsx'

export default function Contacto() {
  function recibirMensaje(datos) {
    console.log('Datos del formulario:', datos)
    alert(`¡Gracias, ${datos.nombre}! El formulario se ha enviado correctamente.`)
  }

  return (
    <main className="contacto-pagina">
      <FormularioContacto
        titulo="Hablemos de tu proyecto"
        descripcion="¿Tienes una idea o propuesta? Escríbeme."
        textoBoton="Enviar consulta"
        onEnviar={recibirMensaje}
      />
    </main>
  )
}
