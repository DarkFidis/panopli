import React from "react";
import {useMapEvents} from "react-leaflet";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../types/redux";
import {changeOrigin} from "../../store/slices/map";

export const MapListener: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng
      dispatch(changeOrigin([lat, lng]))
    }
  })
  return null
}

export default MapListener
