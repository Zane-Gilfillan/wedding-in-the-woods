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
                <Image src= {pic} alt='cabin in the woods' />
            </div>
            <div className={styles.text__holder}>
                <div className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio aliquam ipsa, deleniti voluptatibus quae adipisci laudantium earum odio inventore perferendis fuga. Placeat porro, assumenda accusamus neque nisi provident eveniet repudiandae.</div>
                <div className={styles.button__container}>
                <Link href='/rsvp'><div className={styles.btn}>rsvp</div></Link>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default showcase