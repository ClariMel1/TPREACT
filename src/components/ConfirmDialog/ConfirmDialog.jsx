import styles from "./ConfirmDialog.module.css"
import Button from "../Button/Button"
import OutlinedButton from "../OutlinedButton.jsx/OutlinedButton"

export default function ConfirmDialog({ title, message, onConfirm, onCancel }) {
    const handleConfirm = () => {
        onConfirm()
    }

    const handleCancel = () => {
        onCancel()
    }

    return (
        <div className={styles.confirmDialog} onClick={handleCancel}>
            <div className={styles.confirmDialogContent} onClick={(e) => e.stopPropagation()}>
                <h2>{title}</h2>
                <p>{message}</p>
                <div className={styles.buttonContainer}>
                    <OutlinedButton text="Cancelar" onClick={handleCancel} />
                    <Button text="Aceptar" type="submit" onClick={handleConfirm} />
                </div>
            </div>
        </div>
    )
}