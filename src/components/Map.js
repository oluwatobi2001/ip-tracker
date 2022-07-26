import React from 'react';
import {MapContainer, TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css"

const ReactMap = () => {
    return (
        <>
        <MapContainer center={[11.1271, 78.567]} zoom={13}
        style={{ height: "100vh", width: "100%", zIndex: "2"}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      
    </MapContainer>
        </>

    )
}
export default ReactMap;
