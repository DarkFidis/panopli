import React from "react";
import styles from "../../styles/Card.module.css";
import {CardProps} from "../../types/CardProps";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const PlaceCard: React.FC<CardProps> = ({ imgUrl, title, stars, restoUrl}) => {
  const arrayOfStars = Array.from(Array(stars).keys())
  return (
    <div className={styles.card}>
      <img src={imgUrl} alt=""/>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam animi consequuntur ea molestias illo.
          Porro error facilis obcaecati. Quisquam, placeat.</p>
        <div className={styles.stars}>
          { arrayOfStars.map((_, key) => (
            <FontAwesomeIcon icon={faStar} key={key} className={styles.stars} />
          ))}
        </div>
        <a href={restoUrl} target='_blank'>
          <button className={styles.btn}>check out!</button>
        </a>
      </div>
    </div>
  )
}

export default PlaceCard
