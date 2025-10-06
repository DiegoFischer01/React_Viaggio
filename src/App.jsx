import { Routes, Route, Link } from "react-router-dom";
import Actividades from "./pages/Actividades.jsx";
import Destinos from "./pages/Destinos.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
export default function App() {
  return <>
      <Navbar/>
      <Routes>
        <Route path="/destinos" element={<Destinos/>}/>
      </Routes>

  </>
}

