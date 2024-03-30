import styles from "../components/footer.module.css"

export default function Footer() {
    return (
        <div className={styles.footer}>
                <button><i className="fa-brands fa-square-x-twitter fa-2xl"></i></button>
                <button><i className="fa-brands fa-square-facebook fa-2xl"></i></button>
                <button><i className="fa-brands fa-square-instagram fa-2xl"></i></button>
                <button><i className="fa-brands fa-square-github fa-2xl"></i></button>
        </div>
    )
}