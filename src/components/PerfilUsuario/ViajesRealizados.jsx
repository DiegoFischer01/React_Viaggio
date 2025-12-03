import generarTextoFecha from "../../utils/generarTextoFecha";

const ViajesRealizadosCard = ({ titulo, fecha, alojamiento, actividades }) => {
  const actividadesArray = Array.isArray(actividades) ? actividades : [];

  return (
    <div className="perfil-usuario card mb-3">
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">
          <strong>Fecha:</strong> {fecha}
        </p>
        <p className="card-text">
          <strong>Alojamiento:</strong> {alojamiento}
        </p>
        <p className="card-text">
          <strong>Actividades:</strong>{" "}
          {actividadesArray.length > 0
            ? actividadesArray.join(", ")
            : "No especificadas"}
        </p>
      </div>
    </div>
  );
};

const ViajesRealizados = ({ reservas }) => {
  const fechaHoy = new Date();

  const reservasCompletadas = reservas.filter((reserva) => {
    if (!reserva.fechaRegreso) return false;

    const fechaRegreso = new Date(reserva.fechaRegreso);

    return fechaRegreso < fechaHoy;
  });

  return (
    <div className="tab-pane" id="realizados" role="tabpanel">
      {reservasCompletadas.length === 0 ? (
        <p>No tenés viajes completados.</p>
      ) : (
        reservasCompletadas.map((reserva) => {
          const actividadesArray = reserva.actividades?.map(
            (actividad) => actividad.titulo
          );

          return (
            <ViajesRealizadosCard
              key={reserva.idReserva}
              titulo={`Viaje a ${reserva.ciudad}`}
              fecha={generarTextoFecha(
                reserva.fechaLlegada,
                reserva.fechaRegreso
              )}
              alojamiento={reserva.hotel.nombre}
              actividades={actividadesArray}
            />
          );
        })
      )}
    </div>
  );
};

export default ViajesRealizados;
