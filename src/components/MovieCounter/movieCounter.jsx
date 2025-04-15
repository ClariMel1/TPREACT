
export default function MovieCounter({ peliculas }) {
    // Función para contar el total por género
    const contarPorGenero = (genero) => {
        return peliculas.filter(pelicula => pelicula.genero === genero).length;
    };

    // Contadores totales
    const totalPeliculas = peliculas.length;
    const totalAccion = contarPorGenero("Acción");
    const totalComedia = contarPorGenero("Comedia");
    const totalDrama = contarPorGenero("Drama");
    const totalTerror = contarPorGenero("Terror");
    const totalCienciaFiccion = contarPorGenero("Ciencia Ficción");

    return (
        <div>
            <p>Total de Películas y Series: {totalPeliculas}</p>
            <p>Acción: {totalAccion}</p>
            <p>Comedia: {totalComedia}</p>
            <p>Drama: {totalDrama}</p>
            <p>Terror: {totalTerror}</p>
            <p>Ciencia Ficción: {totalCienciaFiccion}</p>
        </div>
    );
}
