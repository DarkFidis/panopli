import React from "react";
import styles from '../../styles/ReviewsSection.module.css'
import {reviews} from "./Reviews.constants";
import {ReviewCard} from "../ReviewCard";

export const ReviewsSection: React.FC = () => (
  <section id="review" className={styles.review}>
    <h1 className={styles.heading}><span>r</span>eview</h1>
    <div className={styles.boxContainer}>
      { reviews.map((review, key) => (
        <ReviewCard {...review} />
      )) }
    </div>
  </section>
)

export default ReviewsSection
