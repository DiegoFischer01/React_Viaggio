import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import alojamientosDetalles from "../../data/alojamientosDetalles";
import { FaWifi, FaParking, FaUtensils, FaSnowflake } from "react-icons/fa";
import "../../css/alojamientoDetalles.css";

function AlojamientoDetalle() {
  const { id } = useParams();

  // ---------------------------
  // 🟣 MAPA DE SERVICIOS → ICONOS
  // ---------------------------
  const iconosServicios = {
    wifi: <FaWifi size={22} />,
    "wi-fi": <FaWifi size={22} />,
    estacionamiento: <FaParking size={22} />,
    parking: <FaParking size={22} />,
    desayuno: <FaUtensils size={22} />,
    "desayuno incluido": <FaUtensils size={22} />,
    breakfast: <FaUtensils size={22} />,
    aire: <FaSnowflake size={22} />,
    "aire acondicionado": <FaSnowflake size={22} />,
  };

  // Estado final donde se guarda TODO JUNTO (backend + local)
  const [hotel, setHotel] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    async function cargar() {
      // 1) Intentar cargar datos del backend
      let backend = null;
      try {
        const res = await fetch(`http://localhost:3000/hoteles/${id}`);
        if (res.ok) backend = await res.json();
      } catch (err) {
        console.error("Error backend:", err);
      }

      // 2) Buscar fallback local
      const local = alojamientosDetalles.find(a => a.id === parseInt(id));

      // 3) Armar galería final
      let imagenesFinal = [];

      // 👉 prioridad: backend
      if (backend?.imagenPrincipal) {
        imagenesFinal.push({ url: backend.imagenPrincipal });
      }
      if (backend?.imagenesExtras?.length > 0) {
        backend.imagenesExtras.forEach((url) => {
          imagenesFinal.push({ url });
        });
      }

      // 👉 fallback: local
      if (imagenesFinal.length === 0 && local?.imagen?.length > 0) {
        imagenesFinal = local.imagen;
      }

      // 👉 si NO hay ninguna imagen (no debería pasar)
      if (!imagenesFinal.length) {
        imagenesFinal = [{
          url: "/src/assets/alojamientos/PortadasHoteles/detallesImg/habitacion1.jpg"
        }];
      }

      // imagen principal
      setMainImage(imagenesFinal[0].url);

      // 👉 fusión de data final
      const fusionado = {
        ...local,
        ...backend,
        imagen: imagenesFinal
      };

      setHotel(fusionado);
    }

    cargar();
  }, [id]);

  if (!hotel) return <p>Cargando...</p>;

  return (
    <div className="detalle-container">

      {/* MINIATURAS */}
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
        className="detalle-miniaturas"
      >
        {hotel.imagen.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.url}
              alt={`foto ${index + 1}`}
              className={`miniatura ${mainImage === img.url ? "activa" : ""}`}
              onClick={() => setMainImage(img.url)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* IMAGEN PRINCIPAL */}
      <div className="detalle-principal">
        <img src={mainImage} alt="principal" className="detalle-img-principal" />
      </div>

      {/* INFORMACIÓN */}
      <div className="detalle-info">

        {/* IZQUIERDA */}
        <div className="detalle-info-left">
          <h2>{hotel.nombre}</h2>
          <p className="detalle-subinfo">
            ⭐ {hotel.estrellas} · {hotel.direccion}
          </p>

          {/* SERVICIOS */}
          <div className="detalle-servicios">

            {/* 🟦 Caso 1: Backend → íconos automáticos */}
            {hotel.servicios?.length > 0 &&
              hotel.servicios.map((serv, i) => {
                const clave = serv.toLowerCase().trim();
                const icono = iconosServicios[clave];

                return (
                  <div key={i} className="servicio-item">
                    {icono ? (
                      <>
                        {icono}
                        <p>{serv}</p>
                      </>
                    ) : (
                      <p>{serv}</p>
                    )}
                  </div>
                );
              })
            }

            {/* 🟧 Caso 2: Alojamiento viejo (sin servicios) → íconos fijos */}
            {(!hotel.servicios || hotel.servicios.length === 0) && (
              <>
                <div className="servicio-item">
                  <FaWifi size={22} />
                  <p>Wi-Fi</p>
                </div>

                <div className="servicio-item">
                  <FaParking size={22} />
                  <p>Free parking</p>
                </div>

                <div className="servicio-item">
                  <FaUtensils size={22} />
                  <p>Breakfast included</p>
                </div>

                <div className="servicio-item">
                  <FaSnowflake size={22} />
                  <p>Air conditioning</p>
                </div>
              </>
            )}
          </div>

          {/* DESCRIPCIÓN */}
          <h3 className="detalle-titulo">Descripción</h3>
          <p className="detalle-descripcion">{hotel.descripcion}</p>
        </div>

        {/* DERECHA */}
        <div className="detalle-info-right">
          <div className="reserva-card">
            <h3>{hotel.nombre}</h3>
            <p className="detalle-rating">
              ⭐ {hotel.estrellas} · 20 reviews
            </p>

            <div className="reserva-form">
              <div className="input-group">
                <input type="date" />
                <input type="date" />
              </div>

              <select>
                <option>1 persona</option>
                <option>2 personas</option>
                <option>3 personas</option>
              </select>

              <button className="btn-reserve">
                Reservar ${hotel.precio}
              </button>
            </div>

            <p className="no-charges">No se realiza ningún cargo aún</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlojamientoDetalle;
