import { useState, useEffect } from 'react';
import ResumenViaje from '../components/MiViaje/ResumenViaje';
import ItinerarioActividades from '../components/miViaje/ItinerarioActividades';
import MenuOrdenar from '../components/miViaje/MenuOrdenar';
import BotonVolver from '../components/miViaje/BotonVolver';

import '../css/miViaje.css';
const filterIcon = "https://cdn-icons-png.flaticon.com/512/54/54481.png";

function MiViaje() {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [itinerario, setItinerario] = useState([]);
  const [alojamiento, setAlojamiento] = useState(null);
  const [cargando, setCargando] = useState(false);

  // cargar desde local storage
  useEffect(() => {
    const actividadesGuardadas = JSON.parse(localStorage.getItem('itinerario')) || [];
    setItinerario(actividadesGuardadas);

    const alojamientoGuardado = JSON.parse(localStorage.getItem('alojamientoSeleccionado'));
    if(alojamientoGuardado) setAlojamiento(alojamientoGuardado);
  }, []);

  const toggleMenu = () => setMostrarMenu(prev => !prev);
  const cerrarMenu = () => setMostrarMenu(false);

  // Reservar viaje
  const reservarViaje = async () => {
    if (!alojamiento || itinerario.length === 0) {
      alert('Debes seleccionar alojamiento y actividades antes de reservar.');
      return;
    }

    setCargando(true);

    try {
      // DTO que espera el backend
      const reservaDTO = {
        ciudad: alojamiento.ciudad || "Sin ciudad",
        fechaLlegada: alojamiento.fechaInicio || new Date().toISOString(),
        fechaRegreso: alojamiento.fechaFin || null,
        hotelId: alojamiento.id,
        usuarioId: 1, // hay que eemplazar con ID del usuario del token
        //actividadIds: itinerario.map(a => a.id),
        actividadIds: itinerario
  .map(a => Number(a.id))
  .filter(id => !isNaN(id)) // <- esto descarta cualquier NaN

      };

      // Token del usuario logeado
      const token = localStorage.getItem('token');

      // Guardar reserva
      const resCrear = await fetch('http://localhost:3000/reservas', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(reservaDTO),
      });

      if (!resCrear.ok) {
        const errorBody = await resCrear.json();
        console.error('Error del backend:', errorBody);
        alert('Error al crear la reserva: ' + (errorBody.message || resCrear.status));
        return;
      }

      const reservaCreada = await resCrear.json();

      // Enviar mail de confirmación
      const resMail = await fetch(`http://localhost:3000/reservas/${reservaCreada.idReserva}/enviar-confirmacion`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (!resMail.ok) {
        alert('La reserva se guardó, pero falló el envío del correo.');
        return;
      }

      alert('¡Reserva confirmada! Revisá tu correo.');

      // Opcional: limpiar viaje
      // localStorage.removeItem('itinerario');
      // localStorage.removeItem('alojamientoSeleccionado');

    } catch (error) {
      console.error('Error al enviar la reserva:', error);
      alert('Ocurrió un error al enviar la reserva.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <>
      <div className="container my-5">
        <h1 className="mb-4">Mi viaje</h1>
        <div className="row">
          <div className="col-12 col-lg-3 col-md-4">
            {alojamiento ? (
              <div className="card mb-4 p-3">
                <h4 className='fw-bold'>Alojamiento</h4>
                <p className='mb-1'>{alojamiento.nombre}</p>
                <img src={alojamiento.imagen} className='img-fluid rounded' alt="" />
              </div>
            ) : (
              <p className='text-muted'>No seleccionaste alojamiento</p>
            )}

            <ResumenViaje />
          </div>
          <div className="col-12 col-lg-8 col-md-7 ms-auto">
            <h2 className="text-md-end text-center pe-md-5">Actividades</h2>
            <ItinerarioActividades itinerario={itinerario} />
            <button
              id="btnReservar"
              onClick={reservarViaje}
              disabled={cargando}
            >
              {cargando ? 'Cargando...' : 'Reservar'}
            </button>
          </div>
        </div>
      </div>

      <button id="btnOrdenar" onClick={toggleMenu}>
        <img src={filterIcon} alt="Ordenar" /> Ordenar
      </button>

      {mostrarMenu && <MenuOrdenar cerrarMenu={cerrarMenu} />}

      <BotonVolver />
    </>
  );
  
}

export default MiViaje;
