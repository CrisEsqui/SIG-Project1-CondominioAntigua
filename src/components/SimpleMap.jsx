import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, GeoJSON} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import osmtogeojson from 'osmtogeojson';
import './SimpleMap.css'

const SimpleMap = () => {
    const [geoJSON, setGeoJSON] = useState(null);

    useEffect(() => {
        // Reemplaza la URL con la ubicación de tu archivo map.osm
        fetch('../assets/map.osm')
            .then((response) => response.text())
            .then((data) => {
                const geoJSONData = osmtogeojson(new DOMParser().parseFromString(data, 'text/xml'));
                setGeoJSON(geoJSONData);
            });
    }, []);

    const mapOptions = {
        dragging: true, // Deshabilita el movimiento del mapa con el mouse
        zoomControl: true, // Deshabilita el control de zoom en la esquina superior izquierda
        doubleClickZoom: true, // Deshabilita el zoom al hacer doble clic
        scrollWheelZoom: false, // Deshabilita el zoom al usar la rueda del ratón
        touchZoom: false, // Deshabilita el zoom táctil en dispositivos móviles
    };


    return (
        <div>
            <MapContainer center={[9.837735, -83.94805]} zoom={18} scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {geoJSON && <GeoJSON data={geoJSON} />}
            </MapContainer>
        </div>
    );

}

export default SimpleMap;