export default function TarjetaProyecto({ titulo, descripcion, enlace }) {
  return (
    <article className="tarjeta-proyecto">
      <header>
        <h2>{titulo}</h2>
      </header>

      <p>{descripcion}</p>

      {enlace ? (
        <a
          href={enlace}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver proyecto
        </a>
      ) : (
        <p>Repositorio aún no disponible.</p>
      )}
    </article>
  )
}