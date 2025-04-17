import React, { useState } from 'react';

import styles from './home.module.css';

import Titulo from '../../components/Title/title';
import MovieForm from '../../components/MovieForm/movieForm';
import MovieList from '../../components/MovieList/movieList';
import useWatchList from '../../hooks/useWatchList';
import MovieCounter from '../../components/MovieCounter/movieCounter';
import Search from '../../components/Search/Search';
import Filter from '../../components/Filters/Filter';



export default function Home() {
    const [peliculas, setPeliculas] = useWatchList('peliculas', []);


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
        setMostrarFormulario(false);
    };

    const handleSearchChange = (value) => {
        setSearchTerm(value);
    };

    const filteredPeliculas = peliculas.filter((pelicula) =>
        pelicula.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pelicula.director.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const eliminarPelicula = (id) => {
      const actualizadas = peliculas.filter(p => p.id !== id);
      setPeliculas(actualizadas);
    };

    const editarPelicula = (peliculaEditada) => {
      const actualizadas = peliculas.map(p =>
        p.id === peliculaEditada.id ? peliculaEditada : p
      );
      setPeliculas(actualizadas);
    };

    const onToggleVista = (id) => {
      setPeliculas(prevPeliculas =>
        prevPeliculas.map(pelicula =>
          pelicula.id === id ? { ...pelicula, vista: !pelicula.vista } : pelicula
        )
      );
    };


  return (
    <section>
      <div className="header fixed-top bg-dark bg-opacity-75 text-white shadow-sm p-4">
        <Titulo texto={"Series y Peliculas"}/>
        <MovieCounter peliculas={peliculas} />

          <div className={styles.buscaAgrega}>
            <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
           <button onClick={showAddMovieForm} className={styles.agregarPelicula}>
              {mostrarFormulario ? "x" : "+"}
            </button>
          </div>

        {mostrarFormulario && (<MovieForm onAddMovie={agregarPelicula} />)}
      </div> 

      <div className={styles.carteleraPeliculas}>
        {peliculas.length === 0 ? (
          <p>No hay películas ni series aún.</p>
            ) : filteredPeliculas.length === 0 ? (
          <p>No se encontraron resultados.</p>
            ) : (
          <MovieList 
            movies={filteredPeliculas}
            onToggleVista={onToggleVista}
            onDeleteMovie={eliminarPelicula}
            onEditMovie={editarPelicula}/>
        )}
      </div>

      <Filter
        generoSeleccionado={genero}
        tipoSeleccionado={tipo}
        ordenSeleccionado={orden}
        onGeneroChange={setGenero}
        onTipoChange={setTipo}
        onOrdenChange={setOrden}
      />
    </section>
  );
}

