import React from "react";
import styles from '../../styles/Feature.module.css'
import { features } from "./Feature.constants";
import {PlaceCard} from "../PlaceCard";

export const Places: React.FC = () => (
  <section className="feature" id="feature">

    <h1 className="heading"><span>f</span>eatured <span>l</span>ocations</h1>

    <div className={styles.features}>
      { features.map((feature, key) => (
        <PlaceCard {...feature} key={key} />
      ))}
    </div>

  </section>
)

export default Places
