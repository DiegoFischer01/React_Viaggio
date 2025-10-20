import { Routes, Route, Link } from "react-router-dom";
import Actividades from "./pages/Actividades.jsx";
import Destinos from "./pages/Destinos.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  return <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/actividades" element={<Actividades/>}/>
        <Route path="/destinos" element={<Destinos/>}/>
      </Routes>

  </>
}

