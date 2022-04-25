import React from 'react';
import { useState } from 'react';
import produce from 'immer';
import { v4 as uuidv4 } from "uuid";
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../components/header';
import invite from '../public/invite.jpg';
import styles from '../styles/Rsvp.module.scss';
import { useEffect } from 'react';

const Notes = props => props.data.map(note => <div>{note.text}</div>);

const rsvp = () => {

    const initialData =[{ text: ''}]
    const [data, setData] = useState(initialData);

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

            <Image src= {invite} className={styles.img} alt='cabin in the woods' />
            <div className={styles.list__holder}>
                <div className="note__container">
                    <input id='noteinput' placeholder='leave your rsvp here' type="text" />
                    <button onClick={() => handleClick()}>rsvp</button>
                    <Notes data={data} />
                </div>
            </div>
        </div>
    </>
  )
}

export default rsvp