import React from "react";
import styles from "../../styles/Form.module.css";
import { Formik } from "formik";
import {useDispatch, useSelector} from "react-redux";
import {changeDistances, fetchPlacesThunk, getOrigin} from "../../store/slices/map";
import {NearOptions} from "../../types/place";
import {AppDispatch} from "../../store";

export const Form: React.FC = () => {
  const origin = useSelector(getOrigin)
  const dispatch = useDispatch<AppDispatch>()
  const submit = (formValues: NearOptions) => {
    const { maxDistance, minDistance } = formValues
    dispatch(fetchPlacesThunk({ maxDistance, minDistance, origin }))
    dispatch(changeDistances({ maxDistance, minDistance }))
  }
  return (
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
}

export default Form
