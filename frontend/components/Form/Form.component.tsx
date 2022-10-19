import React from "react";
import styles from "../../styles/Form.module.css";

export const Form: React.FC = () => (
  <div className={styles.formContainer}>
    <form action="">
      <h3>search your destination</h3>
      <span>location</span>
      <input type="text" placeholder="place you want to visit" />
      <span>guest members</span>
      <input type="number" placeholder="number of peoples"/>
      <span>arrival</span>
      <input type="date"/>
      <span>leaving</span>
      <input type="date"/>
      <input type="submit" value="search"/>
    </form>
  </div>
)

export default Form
