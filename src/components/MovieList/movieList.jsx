import styles from "./MovieList.module.css";
import MovieItem from "../MovieItem/movieItem";

export default function MovieList({ movies, onToggleVista,onDeleteMovie, onEditMovie  }) {
    return (
        <section className={styles.movieList}>
            {movies.map((movie) => (
                <MovieItem movie={movie} key={movie.id} onToggleVista={onToggleVista} onDelete={onDeleteMovie} onEdit={onEditMovie} />
            ))}
        </section>
    );
}