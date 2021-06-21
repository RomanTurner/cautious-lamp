import React from "react";
import styles from "../styles/Home.module.css";

function Test({ title, description }) {
  return (
      <div className={styles.card}>
        <h1>Test</h1>
      <h2>{title} &rarr;</h2>
      <p>{description}</p>
    </div>
  );
}

export default Test;
