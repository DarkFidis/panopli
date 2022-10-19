import React from "react";
import {ReviewProps} from "../../types/ReviewProps";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/ReviewCard.module.css";

export const ReviewCard: React.FC<ReviewProps> = ({ avatar, name, stars}) => {
  const arrayOfStars = Array.from(Array(stars).keys())
  return (
    <div className={styles.box}>
      <div className={styles.image}>
        <img src={avatar} alt=""/>
      </div>
      <div className={styles.content}>
        <h3>{ name }</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ex labore odio fuga doloremque sequi in
          asperiores ea, nisi ullam?</p>
        <div>
          { arrayOfStars.map((_, key) => (
            <FontAwesomeIcon icon={faStar} key={key} className={styles.stars} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
