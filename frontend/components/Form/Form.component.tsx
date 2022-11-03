import React from "react";
import styles from "../../styles/Form.module.css";
import {FormProps} from "../../types/FormProps";
import { Formik } from "formik";

export const Form: React.FC<FormProps> = ({ submit }) => (
  <div className={styles.formContainer}>
    <Formik
      onSubmit={submit}
      initialValues={{minDistance: 0, maxDistance: 1000}}
    >
      {({ values, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
        <form onSubmit={handleSubmit}>
            <h3>Trouve ton resto</h3>
            <span>Distance minimale</span>
            <input
              type="number"
              name="minDistance"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.minDistance}
            />
            <span>Distance maximale</span>
            <input
              type="number"
              name="maxDistance"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.maxDistance}
            />
            <br/>
            <button type="submit" color="info">Send</button>
        </form>
      )}
    </Formik>
  </div>
)

export default Form
