import React from "react";
import {useMapEvents} from "react-leaflet";
import {MapListenerProps} from "../../types/MapListenerProps";

export const MapListener: React.FC<MapListenerProps> = ({ setOrigin }) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng
      setOrigin([lat, lng])
    }
  })
  return null
}

export default MapListener
