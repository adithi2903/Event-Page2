import styles from '../../styles/Card.module.css'
import Image from 'next/image'
import classNames from 'classnames'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { HButton } from '@components/Accessories/button'
const Card = (props) => {
    useEffect(() => {
        AOS.init({
            // duration : 5000
        })
    }, [])

    return (
        <div>
            <div
                className={styles.borderwrap}
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
            >
                <div className={styles.inner}></div>

                <div className={classNames(styles.wrapper, styles.active)}>
                    <div className={styles.daycards}>
                        <div className={styles.detailContainer}>
                            <Image src={props.poster} width={250} height={250} alt='poster' />
                            <h3>{props.name}</h3>
                            <p>{props.room}</p>
                            <p>{26 + props.date}th January 2025</p>
                            <p>{props.time}</p>
                            <Link
                                href={props.link}
                                passHref={true}
                            >
                                <a target="_blank">
                                    <div><HButton name='Register'></HButton></div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
