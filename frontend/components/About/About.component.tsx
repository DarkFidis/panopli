import React from "react";
import styles from '../../styles/About.module.css'

export const About: React.FC = () => (
  <section id="about" className={styles.about}>
    <h1 className='heading'><span>a</span>bout <span>u</span>s</h1>
    <div className={styles.row}>
      <div className={styles.image}>
        <img src="images/about-img.png" alt=""/>
      </div>
      <div className={styles.content}>
        <h3>Qui sommes nous ?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam aut tenetur quaerat omnis perferendis
          nesciunt quidem odit quod! Ex excepturi temporibus iste assumenda, odio magnam laudantium minus asperiores
          distinctio!</p><br/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, itaque.</p>
        <a href="https://darkfidis.github.io/portfolio/" target='_blank'>
          <button className={styles.btn}>En savoir plus</button>
        </a>
      </div>
    </div>
  </section>
)

export default About
