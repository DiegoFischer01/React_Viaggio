function generarTextoFecha(fechaInicio, fechaFin) {
  const inicio = new Date(fechaInicio);
  const fin = fechaFin ? new Date(fechaFin) : null;

  if (isNaN(inicio)) {
    return "La fecha de llegada es inválida.";
  }

  if (!fin) {
    const diaInicio = inicio.getDate();
    const mesInicio = inicio.toLocaleDateString("es-ES", { month: "long" });
    const añoInicio = inicio.getFullYear();
    return `Desde el ${diaInicio} de ${mesInicio} de ${añoInicio}`;
  }

  if (isNaN(fin)) {
    return "La fecha de regreso es inválida.";
  }

  const diaInicio = inicio.getDate();
  const diaFin = fin.getDate();

  const mesInicio = inicio.toLocaleDateString("es-ES", { month: "long" });
  const mesFin = fin.toLocaleDateString("es-ES", { month: "long" });

  const añoInicio = inicio.getFullYear();
  const añoFin = fin.getFullYear();

  const mismoMes = inicio.getMonth() === fin.getMonth() && añoInicio === añoFin;
  const mismoAño = añoInicio === añoFin;

  let mensaje;

  if (mismoMes) {
    mensaje = `Del ${diaInicio} al ${diaFin} de ${mesInicio}`;
  } else {
    mensaje = `Del ${diaInicio} de ${mesInicio} al ${diaFin} de ${mesFin}`;
  }

  if (mismoAño) {
    mensaje += ` de ${añoInicio}`;
  } else {
    mensaje += ` de ${añoInicio} al ${añoFin}`;
  }

  return mensaje;
}

export default generarTextoFecha;