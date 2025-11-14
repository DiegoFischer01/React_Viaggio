import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import alojamientosDetalles from "../../data/alojamientosDetalles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { FaWifi, FaParking, FaUtensils, FaSnowflake } from "react-icons/fa";
import "../../css/alojamientoDetalles.css";

function AlojamientoDetalle() {
  const { id } = useParams();

  // Estado final donde se guarda TODO JUNTO (backend + local)
  const [hotel, setHotel] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    async function cargar() {
      // 👉 1. DATOS DEL BACKEND
      const res = await fetch(`http://localhost:3000/hoteles/${id}`);
      const backend = await res.json();

      // 👉 2. DATOS LOCALES (galería + descripcion larga + servicios)
      const local = alojamientosDetalles.find(a => a.id === parseInt(id));

      // 👉 3. FUSIÓN (acá se junta todo)
      const fusionado = {
        ...backend,          // nombre, estrellas, precio, ubicación, imagenPrincipal
        ...local             // imagenes, descripcion larga, servicios
      };

      setHotel(fusionado);

      // Imagen principal por defecto
      if (local?.imagen?.length > 0) {
        setMainImage(local.imagen[0].url);
      }
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

      {/* INFORMACIÓN + RESERVA */}
      <div className="detalle-info">
        {/* IZQUIERDA */}
        <div className="detalle-info-left">
          <h2>{hotel.nombre}</h2>
          <p className="detalle-subinfo">
            ⭐ {hotel.estrellas} · {hotel.direccion}
          </p>

          {/* SERVICIOS */}
          <div className="detalle-servicios">
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
