import React from "react";
import styles from '../../styles/Header.module.css'
import {Navbar} from "../Navbar";

export const Header: React.FC = () => (
  <header className={styles.header}>
    <a href="#" className={styles.logo}>travel <span>.</span></a>
    <Navbar />
  </header>
)

export default Header
