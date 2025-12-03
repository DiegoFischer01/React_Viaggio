const Favoritos = () => {
  const favoritos = [
    { id: 1, nombre: "Cabañas en Bariloche" },
    { id: 2, nombre: "City tour en Buenos Aires" },
    { id: 3, nombre: "Restaurantes en Mendoza" },
  ];

  return (
    <div className="tab-pane" id="favoritos" role="tabpanel">
      <p>Actividades y hospedajes guardados.</p>
      <ul>
        {favoritos.map((fav) => (
          <li key={fav.id}>{fav.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favoritos;
