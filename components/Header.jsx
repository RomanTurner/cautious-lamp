import React from 'react'
import styles from '../styles/Header.module.css'

function Header() {
    return (
     <>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing{" "}
        <code className={styles.code}>pages/index.js</code>
        </p>
     </>
    )
}

export default Header
