
export default function SobreMi() {
  return (
    <article className="sobre-mi" aria-labelledby="titulo-sobre-mi">
      <header>
        <h1 id="titulo-sobre-mi">Sobre mí</h1>
        <p>
          Soy estudiante universitario y me interesa combinar la creatividad
          con la tecnología para desarrollar proyectos que aporten valor.
        </p>
      </header>

      <section aria-labelledby="titulo-estudios">
        <h2 id="titulo-estudios">¿Qué estudio?</h2>
        <p>
          Actualmente estudio un bachillerato universitario, donde busco
          fortalecer mis conocimientos y descubrir nuevas áreas en las que
          pueda desarrollarme.
        </p>
      </section>

      <section aria-labelledby="titulo-intereses">
        <h2 id="titulo-intereses">Mis intereses</h2>
        <ul>
          <li>Desarrollo web y programación.</li>
          <li>Diseño y comunicación visual.</li>
          <li>Desarrollo de videojuegos con Godot.</li>
          <li>Matemáticas y resolución de problemas.</li>
          <li>Robótica y tecnología.</li>
        </ul>
      </section>

      <section aria-labelledby="titulo-futuro">
        <h2 id="titulo-futuro">¿Hacia dónde quiero ir?</h2>
        <p>
          Quiero seguir desarrollando mis habilidades técnicas y creativas
          para crear experiencias digitales, participar en proyectos
          innovadores y encontrar formas de unir el diseño con la programación.
        </p>
      </section>
    </article>
  )
}
