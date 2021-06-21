import React from 'react'
import styles from "../styles/Card.module.css";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Card({title, description}) {
  return (
      <div className={styles.card}>
      <h2>{title} &rarr;</h2>
      <FontAwesomeIcon className='icons' icon={faUser}/>
      <p> {description}</p>
      </div>
    );
}

export default Card
