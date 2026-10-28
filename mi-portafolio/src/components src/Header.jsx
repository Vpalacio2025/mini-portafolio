import Header from './Header.jsx'
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/habilidades">Habilidades</NavLink></li>
          <li><NavLink to="/proyectos">Proyectos</NavLink></li>
          <li><NavLink to="/contacto">Contacto</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header