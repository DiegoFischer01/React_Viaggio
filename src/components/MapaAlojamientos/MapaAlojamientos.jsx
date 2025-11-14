import { use, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import alojamientosMapa from "../../data/alojamientosMapa";


export default function MapaAlojamientos() {

    const navigate = useNavigate();

    useEffect(() => {
        // Crear mapa
        const map = L.map("mapa").setView([-36.8933, -60.3225], 14);

        // Capa base
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
        }).addTo(map);

        // Ícono rojo
        const redIcon = L.icon({
        iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
        });

        // Agregar los alojamientos al mapa
        alojamientosMapa.forEach((aloj) => {
        const popupContent = `
            <div style="text-align:center; width:180px;">
            <img src="${aloj.imagen}" alt="${aloj.nombre}"
                style="width:100%; border-radius:8px; margin-bottom:8px;" />
            <h4 style="margin:0; font-size:14px;">${aloj.nombre}</h4>
            <p style="font-size:12px; color:#555;">${aloj.descripcion}</p>

        <button id="verMas-${aloj.id}"
            style="
            margin-top:6px;
            padding:4px 8px;
            background:#eb6424;
            color:white;
            border:none;
            border-radius:4px;
            font-size:12px;
            cursor:pointer;
            ">
            Ver más
        </button>
        </div>
    `;

    L.marker(aloj.coords, { icon: redIcon })
        .addTo(map)
        .bindPopup(popupContent)
        .on("popupopen", () => {
        const btn = document.getElementById(`verMas-${aloj.id}`);
        if (btn) {
            btn.addEventListener("click", () => {
            navigate(`/alojamientosDetalles/${aloj.id}`);
            });
        }
        });
    });


        // Limpiar mapa cuando se desmonta el componente
        return () => {
        map.remove();
        };
    }, []);

    return <div id="mapa" style={{ height: "400px", width: "100%", borderRadius: "12px" }}></div>;
}