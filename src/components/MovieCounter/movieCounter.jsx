import styles from './movieCounter.module.css';

export default function MovieCounter({ peliculas = [] }) {
    const contarPorGenero = (genero) => {
        return peliculas.filter(p => p.genero === genero).length;
    };

    const totalPeliculas = peliculas.length;
    const totalVistas = peliculas.filter(p => p.vista).length;
    const totalNoVistas = totalPeliculas - totalVistas;

    const totalAccion = contarPorGenero("Acción");
    const totalComedia = contarPorGenero("Comedia");
    const totalDrama = contarPorGenero("Drama");
    const totalTerror = contarPorGenero("Terror");
    const totalCienciaFiccion = contarPorGenero("Ciencia Ficción");

    return (
        <div className={styles.contador}>
            <p>Total de Películas y Series: {totalPeliculas}</p>
            <p>Vistas: {totalVistas}</p>
            <p>No vistas: {totalNoVistas}</p>
            <p>Acción: {totalAccion}</p>
            <p>Comedia: {totalComedia}</p>
            <p>Drama: {totalDrama}</p>
            <p>Terror: {totalTerror}</p>
            <p>Ciencia Ficción: {totalCienciaFiccion}</p>
        </div>
    );
}

