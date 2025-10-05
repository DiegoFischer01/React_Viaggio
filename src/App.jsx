import { Routes, Route } from 'react-router-dom';
import PaginaAlojamientos from './pages/PaginaAlojamientos';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Inicio de Viaggio</h1>} />
      <Route path="/alojamientos" element={<PaginaAlojamientos />} />
    </Routes>
  );
}

export default App;