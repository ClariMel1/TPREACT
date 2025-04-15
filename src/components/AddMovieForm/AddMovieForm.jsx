import styles from "./AddMovieForm.module.css";

export default function AddMovie({ onAddMovie, onClose }) {
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
                    <input type="url" id="image" name="image" required />
                    <label htmlFor="type">Tipo:</label>
                    <select id="type" name="type" required>
                        <option value="Movie">Película</option>
                        <option value="Serie">Serie</option>
                    </select>
                    <label htmlFor="director">Director:</label>
                    <input type="text" id="director" name="director" required />
                    <label htmlFor="genre">Género:</label>
                    <select id="genre" name="genre" required>
                        <option value="action">Acción</option>
                        <option value="comedy">Comedia</option>
                        <option value="drama">Drama</option>
                        <option value="horror">Terror</option>
                        <option value="sci-fi">Ciencia Ficción</option>
                        <option value="romance">Romance</option>
                        <option value="thriller">Suspenso</option>
                        <option value="fantasy">Fantasía</option>
                        <option value="documentary">Documental</option>
                        <option value="animation">Animación</option>
                        <option value="adventure">Aventura</option>
                    </select>
                    <label htmlFor="year">Año:</label>
                    <input type="number" id="year" name="year" min="1900" required />
                    <label htmlFor="rating">Rating:</label>
                    <input type="range" id="rating" name="rating" min="1" max="5" required />
                    <button type="submit">Aceptar</button>
                </form>
            </div>
        </div>
    );
}