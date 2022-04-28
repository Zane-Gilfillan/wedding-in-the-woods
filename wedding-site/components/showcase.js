import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import pic from '../public/cabin-main.jpg'
import styles from '../styles/Showcase.module.scss'

const showcase = () => {
  return (
    <>
        <div className={styles.image__holder}>
            <div className={styles.img__main}>
                <Image className={styles.img} src= {pic} alt='cabin in the woods' />
            </div>
            <div className={styles.text__holder}>
                <div className={styles.text}>nice job! if you're seeing this you opened your letter and followed the instructions correctly. we're getting married and we're ready to party. click the rsvp button to leave your name and something cute. see ya there 🧡</div>
                <div className={styles.button__container}>
                <Link href='/rsvp'><div className={styles.btn}>rsvp</div></Link>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default showcase