import React, { useState } from 'react';

import Titulo from '../../components/Title/title';
import MovieForm from '../../components/MovieForm/movieForm';
import MovieList from '../../components/MovieList/movieList';
import useWatchList from '../../hooks/useWatchList';
import MovieCounter from '../../components/MovieCounter/movieCounter';
import Search from '../../components/Search/Search';
import Filter from '../../components/Filters/Filter';


export default function Home() {
    const [peliculas, setPeliculas] = useWatchList('peliculas', []);

    const [addMovieVisible, setAddMovieVisible] = useState(false);

    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [searchTerm, setSearchTerm] = useState(""); 
    const [orden, setOrden] = useState("");
    const [genero, setGenero] = useState("");
    const [tipo, setTipo] = useState("");

    const showAddMovieForm = () => {
        setMostrarFormulario(prevState => !prevState);
    };

    const agregarPelicula = (pelicula) => {
        setPeliculas([...peliculas, pelicula]);
        setMostrarFormulario(false); // Ocultar el form luego de agregar
    };

    const handleSearchChange = (value) => {
        setSearchTerm(value);
    };

    const filteredPeliculas = peliculas.filter((pelicula) =>
        pelicula.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pelicula.director.toLowerCase().includes(searchTerm.toLowerCase())
    );



  return (
    <section>
        <div>
            <Titulo texto={"CineFlix"}/>
            <MovieCounter peliculas={peliculas} />
            <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        </div>

      {mostrarFormulario && (
        <MovieForm onAddMovie={agregarPelicula} />
      )}

      {peliculas.length > 0 ? (
        <MovieList movies={peliculas} />
      ) : (
        <p>No hay películas ni series aún.</p>
      )}


      <Filter
        generoSeleccionado={genero}
        tipoSeleccionado={tipo}
        ordenSeleccionado={orden}
        onGeneroChange={setGenero}
        onTipoChange={setTipo}
        onOrdenChange={setOrden}
      />

        {filteredPeliculas.length > 0 ? (
      <MovieList movies={filteredPeliculas} />
      ) : (
        <p>No se encontraron resultados.</p>
      )}

      <button onClick={showAddMovieForm}>
        {mostrarFormulario ? "Cancelar" : "Agregar Película o Serie"}
      </button>
    </section>
  );
}

