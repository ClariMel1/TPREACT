import { useEffect, useState } from "react";
import { useMovies } from "../../hooks/useMovies";
import { Plus } from "lucide-react";
import styles from "./Home.module.css"
import MovieList from "../../components/MovieList/MovieList";
import Title from "../../components/Title/Title"
import Filters from "../../components/Filters/Filters";
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import EditMovieForm from "../../components/EditMovieForm/EditMovieForm";

export default function Home() {
    const { movies, addMovie } = useMovies()
    const [addMovieVisible, setAddMovieVisible] = useState(false)
    const [ filteredMovies, setFilteredMovies ] = useState(movies)
    const [actualMovie, setActualMovie] = useState(null)

    useEffect(() => {
        setFilteredMovies(movies)
    }
    , [movies])

    const handleFilterChange = (filters) => {
        const { search, genre, type, year, rating } = filters

        const filteredMovies = movies.filter((movie) => {
            return movie.title.toLowerCase().includes(search.toLowerCase()) &&
                (genre ? movie.genre === genre : true) &&
                (type ? movie.type === type : true) &&
                (year ? movie.year === +year : true) &&
                (rating ? movie.rating === +rating : true)
        })        
        setFilteredMovies(filteredMovies)
    }

    const handleClickViewMovie = (id) => {
        console.log("Movie clicked:", id)
        const movie = movies.find((movie) => movie.id === id)
        if (movie) {
            setActualMovie(movie)
        }
    }

    const handleUpdateMovie = (updatedMovie) => {
        console.log("Movie updated:", updatedMovie)
    }

    const handleQuitViewMovie = () => {
        setActualMovie(null)
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
            {actualMovie && <EditMovieForm movie={actualMovie} onClose={handleQuitViewMovie} onSave={handleUpdateMovie} />}

            {filteredMovies.length > 0 ? (
                <MovieList movies={filteredMovies} onClickMovie={handleClickViewMovie} />
            ) : (
                <div className={styles.emptyMovies}>
                    <h2>No hay peliculas ni series</h2>
                </div>
            )}
            <button className={styles.addMovieButton} onClick={showAddMovieForm}><Plus /></button>
        </section>
    )
}