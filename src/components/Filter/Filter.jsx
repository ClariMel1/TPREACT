import React from 'react';

export default function Filter({ onFilterChange }) {
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        onFilterChange(name, value); // Envía el nombre del filtro y su valor al componente padre
    };

    return (
        <div className="filter-container">
            <label htmlFor="filter">Filtrar por: </label>
            <select id="filter" name="filter" onChange={handleFilterChange}>
                <option value="all">Todos</option>
                <option value="watched">Vistas</option>
                <option value="notWatched">No vistas</option>
            </select>

            <label htmlFor="genre">Género: </label>
            <select id="genre" name="genre" onChange={handleFilterChange}>
                <option value="all">Todos</option>
                <option value="accion">Acción</option>
                <option value="comedia">Comedia</option>
                <option value="drama">Drama</option>
                <option value="terror">Terror</option>
            </select>

            <label htmlFor="type">Tipo: </label>
            <select id="type" name="type" onChange={handleFilterChange}>
                <option value="all">Todos</option>
                <option value="pelicula">Película</option>
                <option value="serie">Serie</option>
            </select>
        </div>
    );
}