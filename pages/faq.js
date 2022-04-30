import React from 'react'
import Image from 'next/image'
import Header from '../components/header'
import styles from '../styles/Faq.module.scss'
import pic from '../public/cabin-second.jpg'

const faq = () => {
  return (
    <>
        <Header />
        <div className={styles.image__holder}>
            <div className={styles.img__main}>
                <Image className={styles.img} src= {pic} alt='cabin in the woods' />
            </div>
            <div className={styles.text__holder}>
                <div className={styles.text}>
                    <h5>👖 what should we wear?</h5>
                        <p>pants are a bare minimum</p>
                    <h5> 🌮 what do we eat?</h5>
                        <p>lots of tacos and lots of beers</p>
                    <h5> 🛏️ where do we sleep?</h5>
                        <p>there are some hotels close by or bring a tent!</p>
                    <h5> ⏰ when does it start?</h5>
                        <p>sometime in the afternoon</p>
                    <h5> 🌧️ what if it rains?</h5>
                        <p>we rented a cute schoolhouse down the street</p>
                </div>
            </div>
        </div>
    </>
      
  )
}

export default faq