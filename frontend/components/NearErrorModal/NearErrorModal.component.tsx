import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import styles from '../../styles/NearErrorModal.module.css'
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store";
import {closeErrorModal} from "../../store/slices/map";

export const NearErrorModal: React.FC<{ nearError: string }> = ({ nearError }) => {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <FontAwesomeIcon icon={faClose} className={styles.closeModal} onClick={() => dispatch(closeErrorModal())} />
        <p>Erreur : { nearError }</p>
      </div>
    </div>
  )
}

export default NearErrorModal
