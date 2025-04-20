import React, { useState } from 'react';
import styles from './home.module.css';

import Titulo from '../../components/Title/title';
import MovieForm from '../../components/MovieForm/movieForm';
import MovieList from '../../components/MovieList/movieList';
import useWatchList from '../../hooks/useWatchList';
import MovieCounter from '../../components/MovieCounter/movieCounter';
import Search from '../../components/Search/Search';
import Filter from '../../components/Filters/filter';

import { Sparkles, X, Plus } from 'lucide-react';

export default function Home() {
    const [peliculas, setPeliculas] = useWatchList('peliculas', []);


    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [mostrarFiltros, setMostrarFiltros] = useState(false);

    const [searchTerm, setSearchTerm] = useState(""); 
    const [orden, setOrden] = useState("");
    const [genero, setGenero] = useState("");
    const [tipo, setTipo] = useState("");

    const showAddMovieForm = () => {
      setMostrarFormulario(prev => !prev);
    };

    const toggleFiltros = () => {
      setMostrarFiltros(prevState => !prevState);
    };

    const agregarPelicula = (pelicula) => {
      setPeliculas([...peliculas, pelicula]);
      setMostrarFormulario(false);
    };

    const handleSearchChange = (value) => {
        setSearchTerm(value);
    };

  
    const filteredPeliculas = peliculas
    .filter((pelicula) =>
      pelicula.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pelicula.director.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((pelicula) => !genero || pelicula.genero === genero)
    .filter((pelicula) => !tipo || pelicula.tipo === tipo)
    .sort((a, b) => {
      if (orden === "anio-asc") return a.anio - b.anio;
      if (orden === "anio-desc") return b.anio - a.anio;
      if (orden === "rating-asc") return a.rating - b.rating;
      if (orden === "rating-desc") return b.rating - a.rating;
      return 0;
    });


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
      <header className="header fixed-top bg-dark bg-opacity-75 text-white shadow-lg p-4">
        <Titulo texto={"Series y Peliculas"}/>
        <MovieCounter peliculas={peliculas} />

          <div className={styles.buscaAgrega}>
            <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            <button onClick={toggleFiltros} className={styles.filtros}>
              <span className={`${styles.icono} ${mostrarFiltros ? styles.rotado : ''}`}>{mostrarFiltros ? <X /> : <Sparkles />}</span>
            </button>
          </div>

          {mostrarFiltros && (
          <Filter
            generoSeleccionado={genero}
            tipoSeleccionado={tipo}
            ordenSeleccionado={orden}
            onGeneroChange={setGenero}
            onTipoChange={setTipo}
            onOrdenChange={setOrden}
          />
        )}

        {mostrarFormulario && (<MovieForm onAddMovie={agregarPelicula} onCancel={() => setMostrarFormulario(false)} />)}
      </header> 

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

      <button onClick={showAddMovieForm} className={styles.agregarPelicula}> <><Plus /> Agregar Película / Serie</></button>
    </section>
  );
}

