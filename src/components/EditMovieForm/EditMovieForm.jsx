import { useState } from "react";
import Button from "../Button/Button";
import OutlinedButton from "../OutlinedButton.jsx/OutlinedButton";
import styles from "./EditMovieForm.module.css";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";

export default function EditMovieForm({ movie, onSaveMovie, onDeleteMovie, onClose }) {
    const [imgUrl, setImgUrl] = useState(movie.image);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [saveDialog, setSaveDialog] = useState(false);

    const handleImageChange = (e) => {
        const value = e.target.value;
        setImgUrl(value);
    }

    const handleSaveMovie = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedMovie = {
            title: formData.get("title"),
            image: formData.get("image"),
            type: formData.get("type"),
            director: formData.get("director"),
            genre: formData.get("genre"),
            year: parseInt(formData.get("year"), 10),
            rating: parseFloat(formData.get("rating")),
            seen: formData.get("seen") === "on",
        };
        onSaveMovie(movie.id, updatedMovie);
        onClose();
    };

    const showDeleteDialog = () => {
        setDeleteDialog(true);
    }

    const handleDeleteMovie = () => {
        onDeleteMovie(movie.id);
        setDeleteDialog(false);
        onClose();
    }

    const handleCancelDelete = () => {
        setDeleteDialog(false);
    }

    const showSaveDialog = () => {
        setSaveDialog(true);
    }

    const handleCancelSave = () => {
        setSaveDialog(false);
    }

    return (
        <>
            {deleteDialog && (<ConfirmDialog title="Eliminar" message="¿Desea eliminar esta película?" onConfirm={handleDeleteMovie} onCancel={handleCancelDelete}/>)}

            <div className={styles.editMovie} onClick={onClose}>
                <div className={styles.editMovieForm} onClick={(e) => e.stopPropagation()}>
                    <h2>
                        Editar Película o Serie
                    </h2>
                    <form onSubmit={handleSaveMovie}>
                        <label htmlFor="title">Título:</label>
                        <input type="text" id="title" name="title" defaultValue={movie.title} required />
                        <label htmlFor="image">Imagen:</label>
                        <input type="url" id="image" name="image" defaultValue={movie.image} required onChange={handleImageChange}/>
                        <label htmlFor="type">Tipo:</label>
                        <select id="type" name="type" required defaultValue={movie.type}>
                            <option value="Película">Película</option>
                            <option value="Serie">Serie</option>
                        </select>
                        <label htmlFor="director">Director:</label>
                        <input type="text" id="director" name="director" defaultValue={movie.director} required />
                        <label htmlFor="genre">Género:</label>
                        <select id="genre" name="genre" defaultValue={movie.genre} required>
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
                        <input type="number" id="year" name="year" min="1900" defaultValue={movie.year} required />
                        <label htmlFor="rating">Rating:</label>
                        <input type="range" id="rating" name="rating" min="1" max="5" defaultValue={movie.rating}  required />
                        <label htmlFor="seen">¿La viste?</label>
                        <input type="checkbox" name="seen" id="seen" defaultChecked={movie.seen} />
                        <Button text="Guardar" onClick={showSaveDialog} />
                        <Button text="Eliminar" onClick={showDeleteDialog} />
                        <OutlinedButton text="Volver" onClick={onClose} />

                        {saveDialog && (
                            <ConfirmDialog title="Guardar" message="¿Desea guardar los cambios?" onConfirm={handleSaveMovie} onCancel={handleCancelSave}/>
                        )}
                    </form>
                    <img src={imgUrl} alt={movie.title} className={styles.movieImage} />
                </div>
            </div>
        </>
    );
}