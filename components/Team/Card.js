import styles from '../../styles/Card.module.css'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Link from 'next/link'

const Card = (props) => {
    useEffect(() => {
        AOS.init()
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
                        <div>{props.pos}</div> {/* Position */}
                    </div>

                    {/* Improved Description Styling */}
                    <div className={styles.descriptionContainer}>
                        <p className={styles.description}>{props.description || " "}</p>
                    </div>

                    {/* Updated Social Links with Spacing */}
                    <div 
                        className={styles.socialLinks} 
                        style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}
                    >
                        <span>
                            <Link href={props.instagram} passHref>
                                <a target="_blank">
                                    <FaInstagram />
                                </a>
                            </Link>
                        </span>
                        <span>
                            <Link href={props.linkedin} passHref>
                                <a target="_blank">
                                    <FaLinkedin />
                                </a>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
