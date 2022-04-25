import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../components/header';
import invite from '../public/invite.jpg';
import styles from '../styles/Rsvp.module.scss';

const rsvp = () => {

    const [item, setItem] = useState('');
    const [items, setItems] = useState([]);
    const add = (e) => {
        e.preventDefault();
        if (!item) {
            return;
        };
        setItems((items) => [
            ...items,
            {
                id: uuidv4(),
                item
            }
        ]);
    };
    const remove = (index) => {
        setItems((items) => items.filter((_, i) => i !== index));
    }
  return (
    <>
        <Nav />
        <div className={styles.image__holder}>

            <Image src= {invite} className={styles.img} alt='cabin in the woods' />
            <div className={styles.list__holder}>
                <div className={styles.text}>names go here</div>
                <div className={styles.button__container}>
                <Link href='/rsvp'><div className={styles.btn}>rsvp</div></Link>
                </div>
            </div>
            <div className="App">
                <form onSubmit={add}>
                    <fieldset>
                    <label>item</label>
                    <input value={item} onChange={(e) => setItem(e.target.value)} />
                    </fieldset>
                    <button type="submit">add item</button>
                </form>
                {items.map((item, index) => {
                    return (
                    <div key={item.id}>
                        <p>{item.item}</p>
                        <button onClick={() => remove(index)}>remove</button>
                    </div>
                    );
                })}
                </div>
            
        </div>

    </>
  )
}

export default rsvp