import styles from '../../styles/Team.module.css'
import Card from './Card'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import { event } from '@data/timeline'
export const Event = () => {
    useEffect(() => {
        AOS.init({
            // duration : 5000
        })
    }, [])
    return (
        <div className={styles.team_container}>
            <h1 style={{}}>Events</h1>
            <div className={styles.cards}>
                {event.map((data, index) => (
                    <Card
                        key={index}
                        name={data.name}
                        time={data.time}
                        room={data.room}
                        date={data.day}
                    />
                ))}
            </div>
        </div>
    )
}
