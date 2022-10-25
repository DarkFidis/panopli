import React from "react";
import { Circle } from 'react-leaflet'
import {DistanceCircleProps} from "../../types/DistanceCircleProps";

export const DistanceCircles: React.FC<DistanceCircleProps> = ({ distances, origin }) => {
  const { maxDistance, minDistance } = distances
  return (
    <div>
      { maxDistance > 0  && (
        <Circle
          center={origin}
          pathOptions={{ fillColor: 'green', color: 'none', fillOpacity: 0.2 }}
          radius={maxDistance}>
        </Circle>
      )}
      { minDistance > 0 && minDistance < maxDistance  && (
        <Circle
          center={origin}
          pathOptions={{ fillColor: 'red', color: 'none' }}
          radius={minDistance}>
        </Circle>
      )}
    </div>
  )
}

export default DistanceCircles
