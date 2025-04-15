import { useState } from 'react';
import Search from '../Search/Search';
import styles from './Filters.module.css';

export default function Filters({ onFilterChange }) {
    const [filters, setFilters] = useState({
        search: '',
        genre: '',
        type: '',
        year: '',
        rating: ''
    });

    const handleFilterChange = (newFilters) => {
        const updatedFilters = { ...filters, ...newFilters };
        setFilters(updatedFilters);
        onFilterChange(updatedFilters);
    }

    return (
        <div className={styles.filters}>
            <Search onSearch={(value) => handleFilterChange({ search: value })} />
            <h2>Filtros</h2>
            <div className={styles.filterOptions}>
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
                    <option value="movie">Película</option>
                    <option value="series">Serie</option>
                </select>
                <label>Año:</label>
                <select onChange={(e) => handleFilterChange({ year: e.target.value })}>
                    <option value="">Todos</option>
                    {Array.from({ length: 123 }, (_, i) => 2025 - i).map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
                <label>Rating:</label>
                <select onChange={(e) => handleFilterChange({ rating: e.target.value })}>
                    <option value="">Todos</option>
                    <option value="5">⭐⭐⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="1">⭐</option>
                </select>                
            </div>
        </div>
    );
}