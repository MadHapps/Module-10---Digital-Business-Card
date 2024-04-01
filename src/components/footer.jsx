import styles from "../components/footer.module.css"

export default function Footer() {
    return (
        <div className={styles.footer}>
                <button><i onClick={() => window.open('https://twitter.com/PagluicaJoey', '_blank')} className="fa-brands fa-square-x-twitter fa-2xl"></i></button>
                <button><i onClick={() => window.open('https://www.facebook.com/joe.pagluica.9/', '_blank')} className="fa-brands fa-square-facebook fa-2xl"></i></button>
                <button><i onClick={() => window.open('https://www.instagram.com/joeypagluica/', '_blank')} className="fa-brands fa-square-instagram fa-2xl"></i></button>
                <button onClick={() => window.open('https://github.com/MadHapps', '_blank')}><i className="fa-brands fa-square-github fa-2xl"></i></button>
        </div>
    )
}