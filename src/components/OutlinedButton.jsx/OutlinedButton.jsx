import styles from "./OutlinedButton.module.css"

export default function OutlinedButton({ text, onClick, type = "button" }) { 
    return (
        <button type={type} className={styles.outlinedbutton} onClick={onClick}>
            {text}
        </button>
    )
}
