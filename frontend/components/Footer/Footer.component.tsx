import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/Footer.module.css'
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer: React.FC = () => (
  <section className={styles.footer}>

    <h1 className={styles.credit}>design inspiré de <span>mr. web designer</span> | tous droits réservés.</h1>

    <div className={styles.icons}>
      <a href="https://www.facebook.com/matteveanyes" target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.linkedin.com/in/matthieu-seynaeve-27438852" target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/DarkFidis" target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>

  </section>
)

export default Footer
