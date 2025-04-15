import { Star } from "lucide-react";
import styles from "./Rating.module.css"

export default function Rating({value}) {
    return (
        <div className={styles.rating}>
            <Star color={value >= 1 ? "#FFD700" : "#ccc"} />
            <Star color={value >= 2 ? "#FFD700" : "#ccc"} />
            <Star color={value >= 3 ? "#FFD700" : "#ccc"} />
            <Star color={value >= 4 ? "#FFD700" : "#ccc"} />
            <Star color={value >= 5 ? "#FFD700" : "#ccc"} />
        </div>
    )
}