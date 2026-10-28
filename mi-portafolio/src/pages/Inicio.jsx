
import { Link } from 'react-router-dom'

export default function Inicio() {
  return (
    <section className="inicio" aria-labelledby="titulo-inicio">
      <header className="inicio-contenido">
        <p className="inicio-etiqueta">Portafolio personal</p>

        <h1 id="titulo-inicio">Hola, soy Vicente Palacio</h1>

        <p className="inicio-rol">
          Desarrollador Frontend y creativo digital
        </p>

        <p className="inicio-descripcion">
          Bienvenido a mi espacio creativo. Aquí encontrarás mis proyectos,
          habilidades e intereses en el desarrollo web, los videojuegos
          y la tecnología.
        </p>

        <Link to="/sobre-mi" className="boton-explorar">
          Explorar
        </Link>
      </header>

      <section aria-labelledby="titulo-destacados">
        <h2 id="titulo-destacados">Áreas destacadas</h2>

        <ul className="inicio-tarjetas">
          <li>
            <article className="tarjeta-destacada">
              <h3>Desarrollo web</h3>
              <p>
                Creación de interfaces y experiencias digitales.
              </p>
              <Link to="/habilidades">Ver habilidades</Link>
            </article>
          </li>

          <li>
            <article className="tarjeta-destacada">
              <h3>Videojuegos</h3>
              <p>
                Diseño de ideas y desarrollo de proyectos interactivos.
              </p>
              <Link to="/proyectos">Ver proyectos</Link>
            </article>
          </li>

          <li>
            <article className="tarjeta-destacada">
              <h3>Creatividad</h3>
              <p>
                Exploración de conceptos visuales y nuevas soluciones.
              </p>
              <Link to="/sobre-mi">Conocer más</Link>
            </article>
          </li>
        </ul>
      </section>
    </section>
  )
}
