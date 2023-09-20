import React from 'react'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './SimpleMap.css'

const SimpleMap = () => {

    return (
    <MapContainer 
      center={[9.83827, -83.94227]} 
      zoom={20} 
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker 
        position={[9.83827, -83.94227]}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    )

}

export default SimpleMap