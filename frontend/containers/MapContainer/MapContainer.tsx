import React from "react";
import {PlacesSection} from "../../components/PlacesSection";
import {MapSection} from "../../components/MapSection";

export const MapTainer: React.FC = () => {
  return (
    <>
      <MapSection />
      <PlacesSection />
    </>
  )
}

export default MapTainer
