import { Plus } from "lucide-react";
import MovieList from "../../components/MovieList/MovieList";
import Title from "../../components/Title/Title"
import { useMovies } from "../../hooks/useMovies";
import styles from "./Home.module.css"
import Filters from "../../components/Filters/Filters";
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import { useState } from "react";

export default function Home() {
    const { movies, addMovie, countMovies } = useMovies()
    const [addMovieVisible, setAddMovieVisible] = useState(false)

    const handleAddMovie = (movie) => {
        addMovie(movie)
    }

    const handleClickMovie = (id) => {
        console.log("Movie clicked:", id)
    }

    const showAddMovieForm = () => {
        setAddMovieVisible(true)
    }

    const hideAddMovieForm = () => {
        setAddMovieVisible(false)
    }

    return (
        <section className={styles.home}>
            <header>
                <Title text={"Mis Pelis y Series"} />
            </header>
            <Filters onFilterChange={() => {}} />
            {addMovieVisible && <AddMovieForm onAddMovie={handleAddMovie} onClose={hideAddMovieForm}/>}

            {countMovies > 0 ? (
                <MovieList movies={movies} onClickMovie={handleClickMovie} />
            ) : (
                <div className={styles.emptyMovies}>
                    <h2>No hay peliculas ni series</h2>
                </div>
            )}
            <button className={styles.addMovieButton} onClick={showAddMovieForm}><Plus /></button>
        </section>
    )
}