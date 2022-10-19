import React from "react";
import styles from '../../styles/Map.module.css'
import {Form} from "../Form";

export const Map: React.FC = () => (
  <section className={styles.home} id="home">
    <div className={styles.video}>
      <video src="images/home-video.mp4" loop muted autoPlay></video>
    </div>
    <div className={styles.content}>
      <h1>explore new places, <br/> adventure awaits.</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod necessitatibus sunt atque consequuntur quam
        veniam magnam consectetur, odio velit alias!</p>
    </div>
    <Form />
  </section>
)

export default Map
