import React from "react";
import styles from '../../styles/Navbar.module.css'

export const Navbar: React.FC = () => (
  <nav className={styles.navbar}>
    <ul>
      <li><a href="#home" className="active">accueil</a></li>
      <li><a href="#feature">restaurants</a></li>
      <li><a href="#about">a propos</a></li>
      <li><a href="#review">avis</a></li>
    </ul>
  </nav>
)

export default Navbar
