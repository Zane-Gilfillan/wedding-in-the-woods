import React from 'react'
import Header from '../components/header'
import styles from '../styles/Directions.module.scss'

const directions = () => {
  return (
    <>
        <Header />
        <div className={styles.directions__container}>
            <div className={styles.map__container}>
                <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d284804.53591549647!2d-90.26442082942309!3d46.43172158116278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d46.337652399999996!2d-90.15437299999999!5e1!3m2!1sen!2sus!4v1650997922255!5m2!1sen!2sus" width="800" height="600" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={styles.text__container}>
                <h2>friends in chicago:</h2>
                <p> 🏕️ our cabin is directly off of HW51</p>
                <p> 📍 you can click the map to add your address</p>
                <h2>friends not in chicago:</h2>
                <p> 🛫 ironwood has an airport!</p>
                <p> 🌆 🗽 you can fly direct from LA or NY</p>
            </div>
        </div>
    </>
  )
}

export default directions