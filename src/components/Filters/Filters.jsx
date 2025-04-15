import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
    const [search, setSearch] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');

    const handleFilterChange = () => {
        onFilterChange({ search, genre, rating });
    };

    return (
        <div className="filters">
            <h2>Filtrar Películas</h2>
            <div>
                <label htmlFor="search">Buscar:</label>
                <input
                    type="text"
                    id="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Título de la película"
                />
            </div>
            <div>
                <label htmlFor="genre">Género:</label>
                <select
                    id="genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                >
                    <option value="">Todos</option>
                    <option value="action">Acción</option>
                    <option value="comedy">Comedia</option>
                    <option value="drama">Drama</option>
                    <option value="horror">Terror</option>
                </select>
            </div>
            <div>
                <label htmlFor="rating">Calificación:</label>
                <select
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                >
                    <option value="">Todas</option>
                    <option value="5">5 estrellas</option>
                    <option value="4">4 estrellas o más</option>
                    <option value="3">3 estrellas o más</option>
                </select>
            </div>
            <button onClick={handleFilterChange}>Aplicar Filtros</button>
        </div>
    );
};

export default Filters;