import styles from "../components/content.module.css"

export default function Content() {
    return (
        <div className={styles.content}>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora excepturi sequi labore velit nostrum impedit nobis porro ipsam ea cumque ab qui perferendis, aliquid nemo.</p>
            <h2>Interests</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam aliquam rem illo, sapiente odio eum.</p>
        </div>
    )
}