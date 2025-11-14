// src/data/alojamientos.js
import image1 from "../assets/alojamientos/PortadasHoteles/detallesImg/habitacion1.jpg";
import image2 from "../assets/alojamientos/PortadasHoteles/detallesImg/habitacion2.webp";
import image3 from "../assets/alojamientos/PortadasHoteles/detallesImg/habitacion3.jpg";
import image4 from "../assets/alojamientos/PortadasHoteles/detallesImg/habitacion4.jpg";


const alojamientosDetalles = [
    {
    id: 1,
    imagen: [
        {url: image1},
        {url: image2, "clases": "grid1"},
        {url: image3, "clases": "grid2"},
        {url: image4, "clases": "grid3"},
        {url: image2, "clases": "grid4"}
    ],
    descripcion: "Hotel tradicional en pleno centro de Olavarría, ideal para viajes de trabajo o descanso.",
    personas: 2,
    servicios: ["WiFi", "Desayuno incluido", "Estacionamiento", "TV por cable", "Aire acondicionado"],
},
{
    id: 2,
    imagen: [
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/Casa_Josefina.png", "clases": "principal"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion3.jpg", "clases": "grid1"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion2.webp", "clases": "grid2"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion4.jpg", "clases": "grid3"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion1.jpg", "clases": "grid4"}
    ],
    descripcion: "Casa amplia y acogedora en zona residencial, perfecta para familias o grupos.",
    personas: 6,
    servicios: ["Parrilla", "Jardín", "Cocina equipada", "WiFi", "Cochera privada"],
},
{
    id: 3,
    imagen: [
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/Centenario.png", "clases": "principal"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion3.jpg", "clases": "grid1"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion2.webp", "clases": "grid2"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion4.jpg", "clases": "grid3"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion1.jpg", "clases": "grid4"}
    ],
    descripcion: "Moderno hotel 3 estrellas con excelente ubicación y atención personalizada.",
    personas: 3,
    servicios: ["WiFi", "Recepción 24 hs", "Servicio a la habitación", "Bar", "Caja de seguridad"],
},
{
    id: 4,
    imagen: [
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/Demetrio.png", "clases": "principal"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion3.jpg", "clases": "grid1"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion2.webp", "clases": "grid2"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion4.jpg", "clases": "grid3"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion1.jpg", "clases": "grid4"}
    ],
    descripcion: "Hotel boutique con diseño elegante y desayuno continental incluido.",
    personas: 2,
    servicios: ["WiFi", "Desayuno buffet", "Smart TV", "Café-bar", "Room service"],
},
{
    id: 5,
    imagen: [
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/Riyak.png", "clases": "principal"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion3.jpg", "clases": "grid1"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion2.webp", "clases": "grid2"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion4.jpg", "clases": "grid3"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion1.jpg", "clases": "grid4"}
    ],
    descripcion: "Hotel con habitaciones amplias para parejas o grupos, cerca de la terminal.",
    personas: 5,
    servicios: ["Estacionamiento gratuito", "WiFi", "TV por cable", "Desayuno", "Lavandería"],
},
{
    id: 6,
    imagen: [
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/Santa_Rosa.png", "clases": "principal"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion3.jpg", "clases": "grid1"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion2.webp", "clases": "grid2"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion4.jpg", "clases": "grid3"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion1.jpg", "clases": "grid4"}
    ],
    descripcion: "Hotel 3★ superior con spa y gimnasio, ideal para descansar con comodidad.",
    personas: 2,
    servicios: ["WiFi", "Spa", "Gimnasio", "Pileta climatizada", "Restaurante"],
},
{
    id: 7,
    images: [
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/rex.jpg", "clases": "principal"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion3.jpg", "clases": "grid1"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion2.webp", "clases": "grid2"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion4.jpg", "clases": "grid3"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion1.jpg", "clases": "grid4"}
    ],
    descripcion: "Hotel económico con servicios básicos y ubicación céntrica.",
    personas: 2,
    servicios: ["WiFi", "TV", "Estacionamiento"],
},
{
    id: 8,
    imagen: [
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/HotelOlavarria.jpg", "clases": "principal"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion3.jpg", "clases": "grid1"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion2.webp", "clases": "grid2"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion4.jpg", "clases": "grid3"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion1.jpg", "clases": "grid4"}
    ],
    descripcion: "Alojamiento tradicional con restaurante propio y habitaciones familiares.",
    personas: 4,
    servicios: ["WiFi", "Desayuno", "Restaurante", "Cochera", "Sala de reuniones"],
},
{
    id: 9,
    imagen: [
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/skyView.jpg", "clases": "principal"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion3.jpg", "clases": "grid1"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion2.webp", "clases": "grid2"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion4.jpg", "clases": "grid3"},
        {url: "../Imagenes/alojamientos/Portadas_ Hoteles/detallesImg/habitacion1.jpg", "clases": "grid4"}
    ],
    descripcion: "Apart hotel con departamentos equipados y vistas panorámicas a la ciudad.",
    personas: 3,
    servicios: ["Cocina completa", "Balcón", "WiFi", "Smart TV", "Aire acondicionado"],
}

];

export default alojamientosDetalles;
