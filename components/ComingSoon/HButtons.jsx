import styles from '/styles/HButton.module.css'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

const HButtons = () => {
    return (
        <div className={styles.buttons}>
            <Link href="https://docs.google.com/forms/d/1kPIptXunTYBykR6xTYSxoSdoX0Vg1unL8JVCqkJ56tA/" passHref>
                    <button className={styles.b1}>Register</button>
            </Link>
            <button className={styles.b2}>
                <Link href="https://chat.whatsapp.com/BawJht4Cx8e5jWOTaIUrQP" target="_blank">
                    <a target="_blank">
                        <FaWhatsapp className={styles.faicon} />
                        <span> Join Community </span>
                    </a>
                </Link>
            </button>
        </div>
    )
}

export default HButtons
