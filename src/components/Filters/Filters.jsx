import Search from '../Search/Search';
import styles from './Filters.module.css';

export default function Filters({ onFilterChange }) {
    return (
        <div className={styles.filters}>
            <Search onSearch={onFilterChange} />
            <h2>Filtros</h2>
            <div className={styles.filterOptions}>
                <label>Genero:</label>
                <select onChange={(e) => onFilterChange(e.target.value)}>
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
                <select onChange={(e) => onFilterChange(e.target.value)}>
                    <option value="">Todos</option>
                    <option value="movie">Película</option>
                    <option value="series">Serie</option>
                </select>
                <label>Año:</label>
                <select onChange={(e) => onFilterChange(e.target.value)}>
                    <option value="">Todos</option>
                    {Array.from({ length: 123 }, (_, i) => 2025 - i).map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
                <label>Rating:</label>
                <select onChange={(e) => onFilterChange(e.target.value)}>
                    <option value="">Todos</option>
                    {Array.from({ length: 5 }, (_, i) => i + 1).map((rating) => (
                        <option key={rating} value={rating}>{rating}</option>
                    ))}
                </select>                
            </div>
        </div>
    );
}