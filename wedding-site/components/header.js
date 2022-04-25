import React from 'react'
import styles from '../styles/Header.module.scss'

const header = () => {
  return (
    <>
        <div className={styles.header}>
            <ul className={styles.nav}>
                <li className={styles.list__items}>directions</li>
                <li className={styles.list__items}>faq</li>
                <li className={styles.list__items}>about</li>
            </ul>
        </div>
    </>
  )
}

export default header