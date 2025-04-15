import { Plus } from "lucide-react";
import MovieList from "../../components/MovieList/MovieList";
import Title from "../../components/Title/Title"
import { useMovies } from "../../hooks/useMovies";
import styles from "./Home.module.css"
import Filters from "../../components/Filters/Filters";
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import { useState } from "react";

export default function Home() {
    const { movies, addMovie } = useMovies()
    const [addMovieVisible, setAddMovieVisible] = useState(false)

    const [ filteredMovies, setFilteredMovies ] = useState(movies)

    const handleFilterChange = (query) => {
        const filtered = movies.filter((movie) => {
            return movie.title.toLowerCase().includes(query.toLowerCase())
        })
        setFilteredMovies(filtered)
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
            <Filters onFilterChange={handleFilterChange} />
            {addMovieVisible && <AddMovieForm onAddMovie={addMovie} onClose={hideAddMovieForm}/>}

            {filteredMovies.length > 0 ? (
                <MovieList movies={filteredMovies} onClickMovie={handleClickMovie} />
            ) : (
                <div className={styles.emptyMovies}>
                    <h2>No hay peliculas ni series</h2>
                </div>
            )}
            <button className={styles.addMovieButton} onClick={showAddMovieForm}><Plus /></button>
        </section>
    )
}