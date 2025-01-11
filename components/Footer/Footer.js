import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitter,
    FaEnvelope,
    FaTwitch,
    FaYoutube,
} from 'react-icons/fa'
import { SiDiscord } from 'react-icons/si'
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/Neura_AI_horizontal.png'
const Footer = () => {
    function love() {
        alert("With ❤️💜💛, We present to you... NEURA AI's Flagship <Event>!")
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
                                href="mailto:panchadip125@gmail.com"
                                passHref={true}
                            >
                                <FaEnvelope />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.facebook.com/Dhruva-IIITK-100145739097786"
                                passHref={true}
                            >
                                <a target="_blank">
                                    <FaFacebookSquare />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.instagram.com/dhruva_iiitk/"
                                passHref={true}
                            >
                                <a target="_blank">
                                    <FaInstagram />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://twitter.com/Dhruva_IIITK"
                                passHref={true}
                            >
                                <a target="_blank">
                                    <FaTwitter />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://discord.com/channels/@me"
                                passHref={true}
                            >
                                <a target="_blank">
                                    <SiDiscord />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.youtube.com/channel/UCgEeC4C9ilVYTgBFlwofjUA"
                                passHref={true}
                            >
                                <a target="_blank">
                                    <FaYoutube />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.twitch.tv/dhruva_iiitk"
                                passHref={true}
                            >
                                <a target="_blank">
                                    <FaTwitch />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerLower}>
                <span onClick={love} className={styles.heart}>Made with ❤️ by NEURA AI </span>
            </div>
        </div>
    )
}

export default Footer
