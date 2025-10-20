import { Routes, Route } from "react-router-dom";
import Actividades from "./pages/Actividades.jsx";
import Destinos from "./pages/Destinos.jsx";
import Registro from "./pages/Registro.jsx";
import Navbar from "./components/Navbar.jsx";
import MiViaje from "./pages/MiViaje.jsx";


import PaginaAlojamientos from "./pages/PaginaAlojamientos.jsx";
import PerfilUsuario from "./pages/PerfilUsuario.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/alojamientos" element={<PaginaAlojamientos />} />
        <Route path="/miViaje" element={<MiViaje />} />
      </Routes>

    </>
  );
}
