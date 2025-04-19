import React, { useState } from 'react';
import './Form.css';

export default function Form({ onSubmit, onCancel, initialData = {} }) {
    const [formData, setFormData] = useState({
        title: initialData.title || '',
        type: initialData.type || 'pelicula',
        director: initialData.director || '',
        anio: initialData.anio || '',
        genre: initialData.genre || 'accion',
        rating: initialData.rating || '',
        watched: initialData.watched || false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...formData, id: initialData.id || Date.now() });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>{initialData.id ? 'Editar Película o Serie' : 'Agregar Película o Serie'}</h2>
                <div>
                    <label htmlFor="title">Título:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="type">Tipo:</label>
                    <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                    >
                        <option value="pelicula">Película</option>
                        <option value="serie">Serie</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="director">Director:</label>
                    <input
                        type="text"
                        id="director"
                        name="director"
                        value={formData.director}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="anio">Año:</label>
                    <input
                        type="number"
                        id="anio"
                        name="anio"
                        value={formData.anio}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="genre">Género:</label>
                    <select
                        id="genre"
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                        required
                    >
                        <option value="accion">Acción</option>
                        <option value="comedia">Comedia</option>
                        <option value="drama">Drama</option>
                        <option value="terror">Terror</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="rating">Calificación:</label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        min="1"
                        max="10"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="watched">¿La viste?</label>
                    <input
                        type="checkbox"
                        id="watched"
                        name="watched"
                        checked={formData.watched}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-buttons">
                    <button type="submit">Guardar</button>
                    <button type="button" onClick={onCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
}