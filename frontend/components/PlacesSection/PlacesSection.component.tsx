import React from "react";
import styles from '../../styles/Feature.module.css'
import {PlaceCard} from "../PlaceCard";
import {useSelector} from "react-redux";
import {getActivePlace, getPlaces} from "../../store/slices/map";

export const PlacesSection: React.FC = () => {
  const activePlace = useSelector(getActivePlace)
  const places = useSelector(getPlaces)
  return (
    <section className="feature" id="feature">
      <h1 className="heading"><span>r</span>estaurants </h1>
      <div className={styles.features}>
        { places && places.map((place, key) => (
          <PlaceCard place={place} key={key} isActive={activePlace === place._id} />
        ))}
      </div>

    </section>
  )
}

export default PlacesSection
