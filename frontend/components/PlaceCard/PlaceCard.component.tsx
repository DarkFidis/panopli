import React from "react";
import styles from "../../styles/PlaceCard.module.css";
import {PlaceCardProps} from "../../types/PlaceCardProps";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'

export const PlaceCard: React.FC<PlaceCardProps> = ({ isActive,place, setActivePlace }) => {
  const { address, name, rating, website } = place.properties
  const { city, postalCode, street } = address
  const stars = Math.ceil(+rating)
  const arrayOfStars = Array.from(Array(stars).keys())
  const activeStyle = isActive ? styles.active : ''
  return (
    <div className={`${styles.card} ${activeStyle}`} onClick={() => setActivePlace(place._id)}>
      <Image src="images/resto-3.jpeg" alt=""/>
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p>{street}</p>
        <p>{postalCode}  {city}</p>
        <div className={styles.stars}>
          { arrayOfStars.map((_, key) => (
            <FontAwesomeIcon icon={faStar} key={key} className={styles.stars} />
          ))}
          <p>{ rating }</p>
        </div>
        <a href={website}>
          <button className={styles.btn}>Site web</button>
        </a>
      </div>
    </div>
  )
}

export default PlaceCard
