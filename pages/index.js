import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FetchMovieData from '../components/FetchMovieData'

export default function Home() {
  return (
    <FetchMovieData/>
  )
}
