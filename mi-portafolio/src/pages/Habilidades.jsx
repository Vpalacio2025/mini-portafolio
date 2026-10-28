
import './Habilidades.jsx'

const habilidades = [
  { id: 1, nombre: 'HTML y CSS', porcentaje: 65 },
  { id: 2, nombre: 'JavaScript', porcentaje: 40 },
  { id: 3, nombre: 'React', porcentaje: 35 },
  { id: 4, nombre: 'Diseño visual', porcentaje: 70 },
  { id: 5, nombre: 'Godot y GDScript', porcentaje: 45 },
  { id: 6, nombre: 'Resolución de problemas', porcentaje: 65 },
]

const herramientas = [
  'Visual Studio Code',
  'Git',
  'GitHub',
  'Vite',
  'Godot Engine',
]

export default function Habilidades() {
  return (
    <main className="habilidades">
      <header className="habilidades-header">
        <p className="etiqueta">MI PERFIL TÉCNICO</p>
        <h1>Habilidades</h1>
        <p>
          Estas son algunas de las habilidades que estoy desarrollando
          para combinar la creatividad con la tecnología.
        </p>
      </header>

      <section aria-labelledby="titulo-habilidades">
        <h2 id="titulo-habilidades">Mis conocimientos</h2>

        <ul className="habilidades-grid">
          {habilidades.map((habilidad) => (
            <li className="habilidad-card" key={habilidad.id}>
              <article>
                <header className="habilidad-info">
                  <h3>{habilidad.nombre}</h3>
                  <p>{habilidad.porcentaje}%</p>
                </header>

                <div
                  className="barra-fondo"
                  role="progressbar"
                  aria-label={`Nivel de ${habilidad.nombre}`}
                  aria-valuenow={habilidad.porcentaje}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="barra-progreso"
                    style={{ width: `${habilidad.porcentaje}%` }}
                  />
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="herramientas"
        aria-labelledby="titulo-herramientas"
      >
        <h2 id="titulo-herramientas">Herramientas que utilizo</h2>

        <p>
          Programas y tecnologías que me ayudan a desarrollar y organizar
          mis proyectos.
        </p>

        <ul className="herramientas-lista">
          {herramientas.map((herramienta) => (
            <li key={herramienta}>{herramienta}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}
