import { useState } from "react";
import * as db from "../data/local.js";

export const useMovies = () => {
    const [movies, setMovies] = useState(db.getLocalMovies());

    const addMovie = (movie) => {
        db.addMovie(movie);
        setMovies(db.getLocalMovies());
    }

    const removeMovie = (id) => {
        db.removeMovie(id);
        setMovies(db.getLocalMovies());
    }

    const updateMovie = (id, updatedMovie) => {
        db.updateMovie(id, updatedMovie);
        setMovies(db.getLocalMovies());
    }

    return { movies, addMovie, removeMovie, updateMovie };
}