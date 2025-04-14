import { Pencil, Trash } from "lucide-react";
import styles from "./MovieList.module.css"

export default function MovieList({ movies, onDeleteMovie, onEditMovie }) {
    return (
        <section className={styles.movieList}>
            {movies.map((movie) => (
                <article key={movie.id} className={styles.movieItem}>
                    <h2>{movie.title}</h2>
                    <p><strong>Director: </strong>{movie.director}</p>
                    <p><strong>Gender: </strong>{movie.gender}</p>
                    <p><strong>Year: </strong>{movie.year}</p>
                    <p><strong>Rating: </strong>{movie.rating}</p>
                    <p><strong>Type: </strong>{movie.type}</p>
                    
                    <button onClick={() => {onEditMovie(movie.id)}}><Pencil /></button>
                    <button onClick={() => {onDeleteMovie(movie.id)}}><Trash /></button>
                </article>
            ))}
        </section>
    );
}