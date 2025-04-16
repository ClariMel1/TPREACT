import { useState } from "react";
import Button from "../Button/Button";
import OutlinedButton from "../OutlinedButton.jsx/OutlinedButton";
import styles from "./AddMovieForm.module.css";

export default function AddMovie({ onAddMovie, onClose }) {
    const [imgUrl, setImgUrl] = useState("https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_1280.jpg");

    const handleImageChange = (e) => {
        const value = e.target.value;
        setImgUrl(value);
    }

    const handleAddMovie = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newMovie = {
            id: Date.now(),
            title: formData.get("title"),
            image: formData.get("image"),
            type: formData.get("type"),
            director: formData.get("director"),
            genre: formData.get("genre"),
            year: parseInt(formData.get("year"), 10),
            rating: parseFloat(formData.get("rating")),
            seen: formData.get("seen") === "on",
        };
        onAddMovie(newMovie);
        onClose();
    };

    return (
        <div className={styles.addMovie} onClick={onClose}>
            <div className={styles.addMovieForm} onClick={(e) => e.stopPropagation()}>
                <h2>
                    Añadir Película o Serie
                </h2>
                <form onSubmit={handleAddMovie}>
                    <label htmlFor="title">Título:</label>
                    <input type="text" id="title" name="title" required />
                    <label htmlFor="image">Imagen:</label>
                    <input type="url" id="image" name="image" required onChange={handleImageChange}/>
                    <label htmlFor="type">Tipo:</label>
                    <select id="type" name="type" required>
                        <option value="Película">Película</option>
                        <option value="Serie">Serie</option>
                    </select>
                    <label htmlFor="director">Director:</label>
                    <input type="text" id="director" name="director" required />
                    <label htmlFor="genre">Género:</label>
                    <select id="genre" name="genre" required>
                        <option value="Acción">Acción</option>
                        <option value="Comedia">Comedia</option>
                        <option value="Drama">Drama</option>
                        <option value="Terror">Terror</option>
                        <option value="Ciencia Ficción">Ciencia Ficción</option>
                        <option value="Romance">Romance</option>
                        <option value="Suspenso">Suspenso</option>
                        <option value="fantFantasíaasy">Fantasía</option>
                        <option value="Documental">Documental</option>
                        <option value="Animación">Animación</option>
                        <option value="Aventura">Aventura</option>
                    </select>
                    <label htmlFor="year">Año:</label>
                    <input type="number" id="year" name="year" min="1900" required />
                    <label htmlFor="rating">Rating:</label>
                    <input type="range" id="rating" name="rating" min="1" max="5" required />
                    <label htmlFor="seen">¿La viste?</label>
                    <input type="checkbox" name="seen" id="seen" />
                    <Button text="Aceptar" type="submit" />
                    <OutlinedButton text="Cancelar" onClick={onClose} />
                </form>
                <img src={imgUrl} />
            </div>
        </div>
    );
}