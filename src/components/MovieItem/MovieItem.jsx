import Rating from "../Rating/Rating";
import styles from "./MovieItem.module.css"

export default function MovieItem({ movie, onClick }) {

    const handleClick = () => {
        if (onClick) {
            onClick(movie.id);
        }
    }

    return (
        <article key={movie.id} className={styles.movieItem} onClick={handleClick}>
            <img src={movie.image}/>
            <div className={styles.movieDetails}>
                <h2 className={styles.movieTitle}>{movie.title}</h2>
                <p><span className={styles.movieDetail}>Type: </span>{movie.type}</p>
                <p><span className={styles.movieDetail}>Director: </span>{movie.director}</p>
                <p><span className={styles.movieDetail}>Gender: </span>{movie.gender}</p>
                <p><span className={styles.movieDetail}>Year: </span>{movie.year}</p>
                <Rating value={movie.rating} />
            </div>
        </article>
    )
}