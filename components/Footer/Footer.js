import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitter,
    FaEnvelope,
    FaTwitch,
    FaYoutube,
    FaLinkedinIn
} from 'react-icons/fa'
import { SiDiscord } from 'react-icons/si'
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/MBOSC_hor.png'
const Footer = () => {
    function love() {
        alert("With ❤️💜💛, We present to you... MBOSC's Flagship <Event>!")
    }
    return (
        <div className={styles.footer}>
            <div className={styles.footerUpper}>
                <div className={styles.logo}>
                    <Image src={logo} alt="Panchadip" priority={true} />
                </div>
                <div className={styles.icons}>
                    <ul>
                        <li>
                            <Link
                                href="mailto:example@example.com?subject=Inquiry&body=Hi there,"
                                passHref={true}
                            >
                                <FaEnvelope />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.linkedin.com/company/mboscmitblr"
                                passHref={true}
                            >
                                <a target="_blank">
                                    <FaLinkedinIn />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.instagram.com/manipalosc?utm_source=qr&r=nametag"
                                passHref={true}
                            >
                                <a target="_blank">
                                    <FaInstagram />
                                </a>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className={styles.footerLower}>
                <span onClick={love} className={styles.heart}>Made with ❤️ by MBOSC Tech Team </span>
            </div>
        </div>
    )
}

export default Footer
