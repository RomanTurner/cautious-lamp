import React from 'react'
import styles from "../styles/Home.module.css";

function Card({title, description}) {
    return (
      <div className={styles.card}>
        <h2>{title} &rarr;</h2>
            <p>{description}</p>
      </div>
    );
}

export default Card
