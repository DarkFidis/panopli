import React from 'react';
import styles from '../../styles/About.module.css'

export const About: React.FC = () => (
  <section id="about" className={styles.about}>
    <h1 className="heading"><span>a</span> <span>p</span>ropos</h1>
    <div className={styles.row}>
      <div className={styles.image}>
        <img src="/images/about-img.png" alt=""/>
      </div>
      <div className={styles.content}>
        <h3>Qui sommes nous ?</h3>
        <p>Matthieu Seynaeve, ancien cartographe reconverti développeur web, vous propose un petit service simple, afin que vous puissiez trouver un bon restaurant
        près de votre emplacement. Cette application repose sur du requêtage de proximité basé sur Mongo DB ainsi que Leaflet JS pour la partie cartographie</p><br/>
        <p>A vous de trouver votre bonheur !</p>
        <a href="https://darkfidis.github.io/portfolio/" target='_blank' rel="noopener noreferrer">
          <button className={styles.btn}>En savoir plus</button>
        </a>
      </div>
    </div>
  </section>
)

export default About
