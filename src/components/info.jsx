import styles from './info.module.css'

export default function Info() {
    return (
        <div className={styles.info}>
            <h1>Joey Pagluica</h1>
            <h3>Frontend Developer</h3>
            <h4>joeypagluica.website</h4>
            <div className={styles.buttons}>
                <button className={styles.email}>
                <i className="fa-solid fa-envelope"></i>
                Email
                </button>
                <button className={styles.linkedIn}>
                <i className="fa-brands fa-linkedin"></i>
                LinkedIn
                </button>
            </div>
        </div>
    )
}