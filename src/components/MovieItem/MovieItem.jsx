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
                <h2 className={styles.movieTitle}>{movie.title}</h2>
            <div className={styles.movieDetails}>
                <p><span className={styles.movieDetail}>Tipo: </span>{movie.type}</p>
                <p><span className={styles.movieDetail}>Director: </span>{movie.director}</p>
                <p><span className={styles.movieDetail}>Género: </span>{movie.genre}</p>
                <p><span className={styles.movieDetail}>Año: </span>{movie.year}</p>
                <p><span className={styles.movieDetail}>Vista: </span>{movie.seen ? "✅" : "❌"}</p>
                <Rating value={movie.rating} />
            </div>
        </article>
    )
}