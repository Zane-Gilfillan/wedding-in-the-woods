import React from 'react';
import { useState } from 'react';
import produce from 'immer';
import Image from 'next/image';
import Nav from '../components/header';
import invite from '../public/invite.jpg';
import styles from '../styles/Rsvp.module.scss';
import { useEffect } from 'react';

const Notes = props => props.data.map(note => <div key={''} className={styles.rsvp__notes} suppressHydrationWarning={true}>{note.text} {randomEmoji(emoji)}</div>);
const emoji = ['🐺', '🦊','🐴', '🦌', '🐄', '🐂', '🐿️', '🐓', '🦆', '🐝', '🐞', '🐐'];


const randomEmoji = (emoji) => {
    return emoji[Math.floor(Math.random() * emoji.length)];
}

console.log(randomEmoji(emoji));

const Rsvp = () => {

    const initialData =[{ text: ''}]
    const [data, setData] = useState(initialData);
    const [value, setValue] = useState('');

    const handleClick = () => {
        const text = document.querySelector('#noteinput').value.trim();
        if (text) {
            const nextState = produce(data, draftState => {
                draftState.push({ text });
            });
            document.querySelector('#noteinput').value = '';
            
            if (typeof window !== 'undefined') {
                localStorage.setItem('data', JSON.stringify(nextState));
            };

            setData(nextState);
        };
    };

    useEffect(() => {
        const getData = localStorage.getItem('data');

        if (getData !== '' && getData !== null) {
            return setData(JSON.parse(getData));
        }
        return setData([]);
    }, 0);

  return (
    <>
        <Nav />
        <div className={styles.image__holder}>
            <div className={styles.img__main}>
                <Image src= {invite} className={styles.img} alt='collage invite' />
            </div>
            <div className={styles.list__holder}>
                <div className="note__container">
                    <input className={styles.note__input} id='noteinput' placeholder='lets party ❤️' type="text" />
                </div>
                <div className={styles.btn__container}>
                    <button className={styles.btn} onClick={() => handleClick()}>rsvp</button>
                </div>
            </div>
        </div>

        <div className={styles.rsvp__holder}>
            <Notes data={data} />
        </div>
    </>
  )
}

export default Rsvp