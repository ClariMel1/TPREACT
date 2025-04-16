import { useEffect, useState } from "react";
import { useMovies } from "../../hooks/useMovies";
import { Plus } from "lucide-react";
import styles from "./Home.module.css"
import MovieList from "../../components/MovieList/MovieList";
import Title from "../../components/Title/Title"
import SortAndFiltersOptions from "../../components/SortAndFiltersOptions/SortAndFiltersOptions";
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import EditMovieForm from "../../components/EditMovieForm/EditMovieForm";

export default function Home() {
    const { movies, addMovie, removeMovie, updateMovie } = useMovies()
    const [addMovieVisible, setAddMovieVisible] = useState(false)
    const [filteredMovies, setFilteredMovies] = useState(movies)
    const [actualMovie, setActualMovie] = useState(null)

    useEffect(() => {
        setFilteredMovies(movies)
    }
    , [movies])

    const handleFilterChange = (filters) => {
        const { seen, search, genre, type, sortBy, sortType } = filters
        
        const filteredMovies = movies.filter((movie) => {
            return (movie.title.toLowerCase().includes(search.toLowerCase()) || movie.director.toLowerCase().includes(search.toLowerCase())) &&
            (seen === "all" ? true : seen === "seen" ? movie.seen : !movie.seen) &&
            (genre ? movie.genre === genre : true) &&
            (type ? movie.type === type : true)
        })        
        
        const sortedMovies = filteredMovies.sort((a, b) => {
            if (sortBy === "year") {
                return sortType === "asc" ? a.year - b.year : b.year - a.year
            } else if (sortBy === "rating") {
                return sortType === "asc" ? a.rating - b.rating : b.rating - a.rating
            }
            return 0
        })
        setFilteredMovies(sortedMovies)
    }

    const handleClickViewMovie = (id) => {
        const movie = movies.find((movie) => movie.id === id)
        if (movie) {
            setActualMovie(movie)
        }
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
            {addMovieVisible && <AddMovieForm onAddMovie={addMovie} onClose={hideAddMovieForm}/>}
            {actualMovie && <EditMovieForm
                movie={actualMovie}
                onClose={handleQuitViewMovie} 
                onSaveMovie={updateMovie} 
                onDeleteMovie={removeMovie} />}

            {filteredMovies.length > 0 ? (
                <MovieList movies={filteredMovies} onClickMovie={handleClickViewMovie} />
            ) : (
                <div className={styles.emptyMovies}>
                    <h2>No hay peliculas ni series</h2>
                </div>
            )}

            <SortAndFiltersOptions onFilterChange={handleFilterChange} />
            <button className={styles.addMovieButton} onClick={showAddMovieForm}><Plus /></button>
        </section>
    )
}