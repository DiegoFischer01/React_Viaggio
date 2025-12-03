const Deseados = () => {
  const destinos = [
    { id: 1, nombre: "Mar del Plata" },
    { id: 2, nombre: "Salta" },
    { id: 3, nombre: "El Calafate" },
  ];

  return (
    <div className="tab-pane" id="wishlist" role="tabpanel">
      <p>Destinos que sueñas con visitar ✨</p>
      <ul>
        {destinos.map((destino) => (
          <li key={destino.id}>{destino.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Deseados;
