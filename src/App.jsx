import { Route, Routes } from "react-router-dom";

import Header from "./Header.jsx";
import Inicio from "./pages/Inicio.jsx";
import SobreMi from "./pages/SobreMi.jsx";
import Habilidades from "./pages/Habilidades.jsx";
import Proyectos from "./pages/Proyectos.jsx";
import Contactos from "./pages/Contactos.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contactos />} />
      </Routes>
    </>
  );
}