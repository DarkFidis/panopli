import React from "react";
import {PlaceMarkerProps} from "../../types/PlaceMarkerProps";
import L from "leaflet";
import {Marker} from "react-leaflet";

export const PlaceMarker: React.FC<PlaceMarkerProps> = ({ place, isActive }) => {
  const { location } = place
  const iconOptions = {
    iconUrl: isActive ? 'images/restaurant-active.svg' : 'images/restaurant.svg',
    iconSize: L.point(isActive ? [48,48] : [36,36]),
    iconAnchor: L.point(isActive ? [24,48] : [18, 36]),
  }
  const icon = L.icon(iconOptions)
  return (
    <Marker position={location.coordinates} icon={icon} >
    </Marker>
  )
}

export default PlaceMarker
