function SelectorFechas({ fechaLlegada, setFechaLlegada, fechaRegreso, setFechaRegreso, formularioIntentado }) {
  const hoy = new Date().toISOString().split('T')[0];
  const mostrarError = formularioIntentado && fechaLlegada === '';

  const handleFechaLlegadaChange = (e) => {
    const nuevaFecha = e.target.value;
    setFechaLlegada(nuevaFecha);

    // Si la fecha de regreso quedó inválida, la borramos
    if (fechaRegreso && new Date(fechaRegreso) < new Date(nuevaFecha)) {
      setFechaRegreso('');
    }
  };

  const handleFechaRegresoChange = (e) => {
    const nuevaFecha = e.target.value;
    if (new Date(nuevaFecha) >= new Date(fechaLlegada || hoy)) {
      setFechaRegreso(nuevaFecha);
    } else {
      alert("La fecha de regreso no puede ser anterior a la de llegada.");
      setFechaRegreso('');
    }
  };

  return (
    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="fecha-llegada">Fecha de llegada:</label>
        <input
          type="date"
          className={`form-control form-control-lg ${mostrarError ? 'is-invalid' : ''}`}
          id="fecha-llegada"
          value={fechaLlegada}
          onChange={handleFechaLlegadaChange}
          min={hoy}
        />
        {mostrarError && (
          <div className="invalid-feedback">
            Por favor, selecciona una fecha de llegada.
          </div>
        )}
      </div>

      <div className="col-md-6">
        <label htmlFor="fecha-regreso">Fecha de regreso (opcional)</label>
        <input
          type="date"
          className="form-control form-control-lg"
          id="fecha-regreso"
          value={fechaRegreso}
          onChange={handleFechaRegresoChange}
          min={fechaLlegada || hoy}
        />
      </div>
    </div>
  );
}

export default SelectorFechas;