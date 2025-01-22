import Footer from '@components/Footer/Footer'
import Navbar from '@components/Nav/Navbar'
import Head from 'next/head'
import { Event } from '@components/AllEvents/Event'
import styles from '../styles/Team.module.css'

const team = () => {
    return (
        <>
            <Head>
                <title>MBOSC - EVENTS </title>
                <meta
                    name="description"
                    content="MBOSC - TECH CONCLAVE"
                />
                <link rel="icon" href="/png/MBOSC_2.png" />
            </Head>
            <div className={styles.container}>
                <Navbar />
                <Event />
            </div>
            <Footer />
        </>
    )
}

export default team
