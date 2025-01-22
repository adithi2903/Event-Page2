import styles from '../../styles/Team.module.css'
import Card from './Card'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import {
    mentors,
    developers,
    organisers,
    eventM,
    design,
    content,
    outreach,
} from '@data/team'

export const Team = () => {
    useEffect(() => {
        AOS.init({
            // duration : 5000
        })
    }, [])
    return (
        <div className={styles.team_container}>
            <h1>
                Our <span>Team</span>
            </h1>
            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Executive Team
            </h2>
            <div className={styles.mentor}>
                {
                    mentors.map((data) => (
                        <Card
                            key={data.id}
                            name={data.name}
                            gif={data.gif}
                            image={data.image}
                            linkedin={data.linkedin}
                            instagram={data.instagram}
                            twitter={data.twitter}
                        />
                    ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Ambassadors
            </h2>
            <div className={styles.mentor}>
                {
                    mentors.map((data) => (
                        <Card
                            key={data.id}
                            name={data.name}
                            gif={data.gif}
                            image={data.image}
                            linkedin={data.linkedin}
                            instagram={data.instagram}
                            twitter={data.twitter}
                        />
                    ))}
            </div>

        </div>
    )
}
