import { useState } from 'react';
import Search from '../Search/Search';
import styles from './SortAndFiltersOptions.module.css';

export default function SortAndFiltersOptions({ onFilterChange }) {
    const [filters, setFilters] = useState({
        search: '',
        genre: '',
        type: '',
        sortBy: '',
        sortType: 'asc',
    });

    const handleFilterChange = (newFilters) => {
        const updatedFilters = { ...filters, ...newFilters };
        setFilters(updatedFilters);
        onFilterChange(updatedFilters);
    }

    return (
        <div className={styles.sortAndFiltersOptions}>
            <Search onSearch={(value) => handleFilterChange({ search: value })} />
            
            <div className={styles.sortOptions}>
                <h2>Orden</h2>
                <select onChange={(e) => handleFilterChange({ sortBy: e.target.value })}>
                    <option value="">Ninguno</option>
                    <option value="year">Año</option>
                    <option value="rating">Calificación</option>
                </select>
                <select onChange={(e) => handleFilterChange({ sortType: e.target.value })}>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
            </div>
            <div className={styles.filterOptions}>
                <h2>Filtros</h2>
                <label>Ver:</label>
                <select onChange={(e) => handleFilterChange({ seen: e.target.value })}>
                    <option value="all">Todos</option>
                    <option value="seen">Vistos</option>
                    <option value="unseen">Sin ver</option>
                </select>
                <label>Genero:</label>
                <select onChange={(e) => handleFilterChange({ genre: e.target.value })}>
                    <option value="">Todos</option>
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
                <label>Tipo:</label>
                <select onChange={(e) => handleFilterChange({ type: e.target.value })}>
                    <option value="">Todos</option>
                    <option value="Película">Película</option>
                    <option value="Serie">Serie</option>
                </select>
            </div>
            
        </div>
    );
}