import styles from "./Button.module.css"

export default function Button({ text, onClick, type = "button" }) { 
    return (
        <button type={type} className={styles.button} onClick={onClick}>
            {text}
        </button>
    )
}
