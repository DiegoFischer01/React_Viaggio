import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
import API from "../config/api"

import SelectorDestino from '../components/alojamientos/SelectorDestino';
import SelectorFechas from '../components/alojamientos/SelectorFechas';
import Presupuesto from '../components/alojamientos/Presupuesto';
import Alojamientos from '../components/alojamientos/Alojamientos';
import ActividadesBoton from '../components/alojamientos/ActividadesBoton';

import '../css/alojamientos.css';
import '../css/botones.css'
import fondoAlojamientos from '../assets/alojamientos/PortadasHoteles/lineas-grise-dos.svg';

function PaginaAlojamientos() {
  const [hoteles, setHoteles] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/alojamientos") {
      // solo limpiar el alojamiento seleccionado
      setAlojamientoSeleccionado(null);
      localStorage.removeItem("alojamientoSeleccionado");
    }
  }, [location.pathname]);

  const [seleccionadoHoy, setSeleccionadoHoy] = useState(false);
  const [alojamientoSeleccionado, setAlojamientoSeleccionado] = useState(
    JSON.parse(localStorage.getItem(`alojamientoSeleccionado`)) || null
  );
  const [ciudad, setCiudad] = useState('Olavarría'); // Ciudad por defecto
  const [fechaLlegada, setFechaLlegada] = useState(localStorage.getItem("fechaLlegada") || '');
  const [fechaRegreso, setFechaRegreso] = useState(localStorage.getItem("fechaRegreso") || '');
  const [presupuesto, setPresupuesto] = useState('');
  const [formularioIntentado, setFormularioIntentado] = useState(false);
  const [mostrarAlojamientos, setMostrarAlojamientos] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth();




  useEffect(() => {
    if (fechaLlegada) {
      localStorage.setItem("fechaLlegada", fechaLlegada);
    }
    if (fechaRegreso) {
      localStorage.setItem("fechaRegreso", fechaRegreso);
    }
  }, [fechaLlegada, fechaRegreso]);

  // Cargar hoteles desde backend
  useEffect(() => {
    fetch(`${API}/hoteles`)
      .then((res) => res.json())
      .then((data) => setHoteles(data));
  }, []);


  // Guardar ciudad y fechas automáticamente en localStorage
  useEffect(() => {
    const alojamientoGuardado = JSON.parse(localStorage.getItem('alojamientoSeleccionado')) || {};
    localStorage.setItem('alojamientoSeleccionado', JSON.stringify({
      ...alojamientoGuardado,
      ciudad: ciudad || 'Olavarría',
      fechaLlegada: fechaLlegada || null,
      fechaRegreso: fechaRegreso || null
    }));
  }, [ciudad, fechaLlegada, fechaRegreso]);



  const handleSeleccionar = (hotel) => {
    // Si no está logeado → cartel + redirección
    if (!user) {
      Swal.fire({
        icon: "info",
        title: "Inicia sesión para continuar",
        text: "Debes iniciar sesión para seleccionar un alojamiento",
        confirmButtonText: "Ingresar",
      }).then(() => {
        localStorage.setItem("redirectAfterLogin", "/alojamientos");
        navigate("/login");
      });
      return;
    }

    // Si deselecciona -> limpiar
    if (!hotel) {
      setAlojamientoSeleccionado(null);
      localStorage.removeItem('alojamientoSeleccionado');
      setSeleccionadoHoy(false);
      return;
    }

    // Guardar selección de alojamiento con ciudad y fechas
    setAlojamientoSeleccionado(hotel);
    localStorage.setItem('alojamientoSeleccionado', JSON.stringify({
      ...hotel,
      ciudad: ciudad || 'Olavarría',
      fechaLlegada: fechaLlegada || null,
      fechaRegreso: fechaRegreso || null
    }));
    setSeleccionadoHoy(true);
  };

  const hotelesFiltrados = hoteles.filter(h => {
    if (!presupuesto) return true;
    return h.precio <= parseInt(presupuesto);
  });

  const formularioValido = ciudad !== '' && fechaLlegada !== '';

  const handleContinuar = () => {
    setFormularioIntentado(true);
    if (formularioValido) {
      setMostrarAlojamientos(true);
      setTimeout(() => {
        const seccion = document.getElementById('seccion-alojamientos');
        if (seccion) seccion.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };


  return (
    <div
      style={{
        backgroundImage: `url(${fondoAlojamientos})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div className="container mb-5">
        <h2 className="titulo-destino">Elige tu destino</h2>

        <SelectorDestino
          ciudad={ciudad}
          setCiudad={setCiudad}
          formularioIntentado={formularioIntentado}
        />

        <SelectorFechas
          fechaLlegada={fechaLlegada}
          setFechaLlegada={setFechaLlegada}
          fechaRegreso={fechaRegreso}
          setFechaRegreso={setFechaRegreso}
          formularioIntentado={formularioIntentado}
        />

        <Presupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
        />

        <button
          className="btn btn-continuar-alojamiento btn-warning btn-lg mt-4"
          onClick={handleContinuar}
          disabled={!formularioValido}
        >
          Continuar
        </button>

        {mostrarAlojamientos && (
          <Alojamientos
            alojamientos={hotelesFiltrados}
            alojamientoSeleccionado={alojamientoSeleccionado}
            onSeleccionar={handleSeleccionar}
          />
        )}

        <ActividadesBoton visible={seleccionadoHoy} />
      </div>
    </div>
  );
}

export default PaginaAlojamientos;
