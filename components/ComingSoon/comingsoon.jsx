import styles from "./Coming.module.css";
import HButton from "@components/Accessories/button";
export default function Coming() {
    return(
        <div className={styles.home}>
            <div className={styles.navBar}>
                <p className={styles.logo}>MBOSC</p>
            </div>
            <div className={styles.main}>
                <div className={styles.textDiv}>
                    <p className={styles.maintxt}>Coming Soon!</p>
                    <div className={styles.innerTextDiv}>
                        <p className={styles.txt}>Redefining the way an event flagship fest used to be.<br/>
                        Technical Event you would have never attended before, exclusively by MBOSC - MIT BLR</p>
                    </div>
                    <HButton name="Contact Us"></HButton>
                </div>
            </div>
            {/*
            <div className={styles.footer}>
                <p className={styles.insta}>
                    <a href="/" target="_blank" rel="noreferrer">Instagram</a>&nbsp;
                </p>
                <p className={styles.link}>/ &nbsp;</p>
                <p className={styles.web}>
                    <a href="/" target="_blank" rel="noreferrer"> Website</a>
                </p>
            </div>
            */}
        </div>
            
    );
};