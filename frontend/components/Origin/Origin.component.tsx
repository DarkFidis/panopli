import {Coordinates} from "../../types/place";
import React from "react";
import {Marker} from "react-leaflet";
import L from 'leaflet'

const iconOptions = {
  iconUrl: 'images/location.svg',
  iconSize: L.point([36,36]),
  iconAnchor: L.point([18, 36]),
}

const icon = L.icon(iconOptions)

export const Origin: React.FC<{ origin: Coordinates }> = ({ origin }) => (
  <Marker position={origin} icon={icon}>
  </Marker>
)

export default Origin
