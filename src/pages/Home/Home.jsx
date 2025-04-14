import { Camera, Plus } from "lucide-react";
import MovieList from "../../components/MovieList/MovieList";
import Title from "../../components/Title/Title"
import { useMovies } from "../../hooks/useMovies";
import styles from "./Home.module.css"

export default function Home() {
    const { movies, addMovie, removeMovie } = useMovies()

    const handleAddMovie = () => {
        const newMovie = {
            id: 1,
            title: "Inception",
            director: "Christopher Nolan",
            year: 2010,
            gender: "Sci-Fi",
            rating: 8.8,
            type: "movie"
        }
        addMovie(newMovie)
    }

    const handleDeleteMovie = (id) => {
        removeMovie(id)
    }

    const handleEditMovie = (id) => {
        // TODO: Logic to edit a movie by id
    }

    return (
        <section className={styles.home}>
            <header>
                <Title text={"Home"} />
            </header>
            <MovieList movies={movies} onDeleteMovie={handleDeleteMovie} onEditMovie={handleEditMovie} />
            <button className={styles.addMovieButton} onClick={handleAddMovie}><Plus /></button>
        </section>
    )
}