import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Button from '@mui/material/Button';
import Link from 'next/link'
import Box from '@mui/material/Box';
import News from '../components/buttons/News'
import Weather from '../components/buttons/Weather'


export default function Home() {
    return (
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <News/>
            <Weather/>
        </Box>
    )
}
