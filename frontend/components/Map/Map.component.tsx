import React from "react";
import 'leaflet/dist/leaflet.css';
import {MapContainer, TileLayer} from "react-leaflet";

export const Map: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <MapContainer center={[48.85333,2.34888]} zoom={12} scrollWheelZoom={true} style={{ height: "60vh", width: "99.5vw", margin: "0 auto" }} id={'map'}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
      />
      { children }
    </MapContainer>
)

export default Map
