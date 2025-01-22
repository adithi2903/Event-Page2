import styles from '../../styles/Team.module.css'
import Card from './Card'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import {
    advisory,
    ambassadors,
    dev_res,
    events,
    exec,
    executive,
    media,

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
                Executive Heads
            </h2>
            <div className={styles.mentor}>
                {
                    executive.map((data) => (
                        <Card
                            key={data.id}
                            name={data.name}
                            gif={data.gif}
                            image={data.image}
                            linkedin={data.linkedin}
                            instagram={data.instagram}
                            twitter={data.twitter}
                            pos={data.pos}
                        />
                    ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Web Development And Research Team
            </h2>
            <div className={styles.mentor}>
                {
                    dev_res.map((data) => (
                        <Card
                            key={data.id}
                            name={data.name}
                            gif={data.gif}
                            image={data.image}
                            linkedin={data.linkedin}
                            instagram={data.instagram}
                            twitter={data.twitter}
                            pos={data.pos}
                        />
                    ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Events & Ops, Logistics, HR and the Photography Department
            </h2>
            <div className={styles.mentor}>
                {
                    events.map((data) => (
                        <Card
                            key={data.id}
                            name={data.name}
                            gif={data.gif}
                            image={data.image}
                            linkedin={data.linkedin}
                            instagram={data.instagram}
                            twitter={data.twitter}
                            pos={data.pos}
                        />
                    ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Campus Ambassadors
            </h2>
            <div className={styles.mentor}>
                {
                    ambassadors.map((data) => (
                        <Card
                            key={data.id}
                            name={data.name}
                            gif={data.gif}
                            image={data.image}
                            linkedin={data.linkedin}
                            instagram={data.instagram}
                            twitter={data.twitter}
                            pos={data.pos}
                        />
                    ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Marketing, Social Media and Graphic Designing Department
            </h2>
            <div className={styles.mentor}>
                {
                    media.map((data) => (
                        <Card
                            key={data.id}
                            name={data.name}
                            gif={data.gif}
                            image={data.image}
                            linkedin={data.linkedin}
                            instagram={data.instagram}
                            twitter={data.twitter}
                            pos={data.pos}
                        />
                    ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Executive Members
            </h2>
            <div className={styles.mentor}>
                {
                    exec.map((data) => (
                        <Card
                            key={data.id}
                            name={data.name}
                            gif={data.gif}
                            image={data.image}
                            linkedin={data.linkedin}
                            instagram={data.instagram}
                            twitter={data.twitter}
                            pos={data.pos}
                        />
                    ))}
            </div>

            <h2 data-aos="zoom-in" data-aos-duration="1500">
                Advisory Board
            </h2>
            <div className={styles.mentor}>
                {
                    advisory.map((data) => (
                        <Card
                            key={data.id}
                            name={data.name}
                            gif={data.gif}
                            image={data.image}
                            linkedin={data.linkedin}
                            instagram={data.instagram}
                            twitter={data.twitter}
                            pos={data.pos}
                        />
                    ))}
            </div>
        </div>
    )
}
