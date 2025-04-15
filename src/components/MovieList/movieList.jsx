import styles from "./MovieList.module.css";
import MovieItem from "../MovieItem/movieItem";

export default function MovieList({ movies, onClickMovie }) {
    return (
        <section className={styles.movieList}>
            {movies.map((movie) => (
                <MovieItem movie={movie} key={movie.id} onClick={onClickMovie} />
            ))}
        </section>
    );
}