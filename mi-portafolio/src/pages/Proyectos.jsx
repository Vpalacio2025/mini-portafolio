import TarjetaProyecto from '../components src/TarjetaProyecto.jsx'


const proyectos = [
  {
    id: 1,
    titulo: 'Mi portafolio web',
    descripcion:
      'Sitio web personal desarrollado con React y Vite para presentar mis habilidades, intereses y proyectos.',
    enlace: null,
  },
  {
    id: 2,
    titulo: 'Videojuego con Godot',
    descripcion:
      'Proyecto de desarrollo de videojuegos para explorar la programación y la creación de experiencias interactivas.',
    enlace: null,
  },
  {
    id: 3,
    titulo: 'Proyectos de programación',
    descripcion:
      'Espacio para reunir mis ejercicios, experimentos y aprendizajes relacionados con la programación.',
    enlace: null,
  },
]

export default function Proyectos() {
  return (
    <main className="proyectos">
      <header>
        <h1>Mis proyectos</h1>
        <p>
          Una selección de mis trabajos, ideas y experiencias de aprendizaje.
        </p>
      </header>

      <section aria-label="Lista de proyectos">
        {proyectos.map((proyecto) => (
          <TarjetaProyecto
            key={proyecto.id}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            enlace={proyecto.enlace}
          />
        ))}
      </section>
    </main>
  )
}
