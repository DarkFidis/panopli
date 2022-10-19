import React from "react";
import styles from '../../styles/Navbar.module.css'

export const Navbar: React.FC = () => (
  <nav className={styles.navbar}>
    <ul>
      <li><a data-scroll="home" href="#home" className="active">home</a></li>
      <li><a data-scroll="feature" href="#feature">feature</a></li>
      <li><a data-scroll="about" href="#about">about</a></li>
      <li><a data-scroll="gallery" href="#gallery">gallery</a></li>
      <li><a data-scroll="review" href="#review">review</a></li>
      <li><a data-scroll="contact" href="#contact">contact</a></li>
    </ul>
  </nav>
)

export default Navbar
