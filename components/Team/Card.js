import styles from '../../styles/Card.module.css'
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
import classNames from 'classnames'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'


const Card = (props) => {
    useEffect(() => {
        AOS.init({
            // duration : 5000
        })
    }, [])

    return (
        <div
            className={styles.borderwrap}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
        >
            <div className={styles.wrapper}>
                <div className={styles.daycards}>
                    <Image
                        src={props.image}
                        alt="poster"
                        height="300"
                        width="250"
                        className="imgs"
                    />
                    <style jsx global>{`
                            .imgs {
                                border-radius: 8px;
                            }
                        `}</style>
                    <div className={styles.content_container}>
                        <span className={styles.name}>{props.name}</span>
                    </div>

                    <div style={{ marginTop: '10px' }}>
                        <div>{props.pos}</div>
                    </div>
                    
                    <div style={{ marginTop: '10px' }}>
                        <span style={{ marginRight: '30px' }}>
                            <Link
                                href={props.instagram}
                                passHref={true}
                            >
                                <a target="_blank">
                                    <FaInstagram />
                                </a>
                            </Link>
                        </span> 
                        <span style={{ marginRight: '0px' }}>
                            <Link
                                href={props.linkedin}
                                passHref={true}
                            >
                                <a target="_blank">
                                    <FaLinkedin />
                                </a>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Card
