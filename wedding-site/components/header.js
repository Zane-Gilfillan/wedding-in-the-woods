import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.scss'

const header = () => {
  return (
    <>
        <div className={styles.header}>
            <ul className={styles.nav}>
                <li className={styles.list__items}>directions</li>
                <li className={styles.list__items}>faq</li>
                <Link href='/'><li className={styles.list__items}>home</li></Link>
            </ul>
        </div>
    </>
  )
}

export default header