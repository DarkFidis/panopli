import styles from "../../styles/MapContainer.module.css";
import {Form} from "../Form";
import React from "react";
import dynamic from "next/dynamic";
import {MapSectionProps} from "../../types/MapSectionProps";
import {useSelector} from "react-redux";
import {getActivePlace, getDistances, getOrigin, getPlaces} from "../../store/slices/map";

const DynamicMap = dynamic(() => import('../../components/Map'), { ssr: false })
const DynamicMapListener = dynamic(() => import('../MapListener'), { ssr: false })
const DynamicOrigin = dynamic(() => import('../Origin'), { ssr: false })
const DynamicPlaceMarker = dynamic(() => import('../PlaceMarker'), { ssr: false })
const DynamicDistances = dynamic(() => import('../DistanceCircles'), { ssr: false })

export const MapSection: React.FC = () => {
  const activePlace = useSelector(getActivePlace)
  const distances = useSelector(getDistances)
  const places = useSelector(getPlaces)
  const origin = useSelector(getOrigin)
  return (
    <>
      <div className={styles.tampon}></div>
      <section className={styles.home} id="home">
        <DynamicMap>
          <DynamicMapListener />
          { origin && <DynamicOrigin origin={origin} />}
          {places && places.map((place, index) => (
            <DynamicPlaceMarker
              key={index}
              place={place}
              isActive={activePlace === place._id}
            />
          ))}
          { distances && origin && <DynamicDistances distances={distances} origin={origin} />}
        </DynamicMap>
        <Form />
      </section>
    </>
  )
}

export default MapSection
