import React from "react";
import styles from '../../styles/Feature.module.css'
import {PlaceCard} from "../PlaceCard";
import {PlaceSectionProps} from "../../types/PlaceSectionProps";

export const PlacesSection: React.FC<PlaceSectionProps> = ({ activePlace,places, setActivePlace }) => (
  <section className="feature" id="feature">
    <h1 className="heading"><span>r</span>estaurants </h1>
    <div className={styles.features}>
      { places && places.map((place, key) => (
        <PlaceCard place={place} key={key} isActive={activePlace === place._id} setActivePlace={setActivePlace} />
      ))}
    </div>

  </section>
)

export default PlacesSection
