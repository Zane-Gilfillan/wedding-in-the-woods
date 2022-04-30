import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '../components/header'
import Showcase from '../components/showcase'

export default function Home() {
  return (
    <>
      <Header />
      <Showcase />
    </>
    
    
  )
}
