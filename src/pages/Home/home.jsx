import React, { useState } from 'react';
import styles from './home.module.css';
import Header from '../../components/Header/header';

import MovieForm from '../../components/MovieForm/movieForm';
import MovieList from '../../components/MovieList/movieList';
import useWatchList from '../../hooks/useWatchList';

import { Plus } from 'lucide-react';

export default function Home() {
    const [peliculas, setPeliculas] = useWatchList('peliculas', []);

    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [mostrarFiltros, setMostrarFiltros] = useState(false);
    const [animandoSalida, setAnimandoSalida] = useState(false)

    const [searchTerm, setSearchTerm] = useState(""); 
    const [orden, setOrden] = useState("");
    const [genero, setGenero] = useState("");
    const [tipo, setTipo] = useState("");
    const [vista, setVista] = useState("");

    const showAddMovieForm = () => {
      setMostrarFormulario(prev => !prev);
    };

    const agregarPelicula = (pelicula) => {
      console.log("Película agregada: ", pelicula);
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
      .filter((pelicula) => {
        if (vista === "Vistas") return pelicula.vista === true;
        if (vista === "No vistas") return pelicula.vista === false;
        return true;
      })
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

    const limpiarFiltros = () => {
      setGenero(''); 
      setTipo('');
      setOrden('');
      setVista('');
    };


    const toggleFiltros = () => {
      if (mostrarFiltros) {
        setAnimandoSalida(true);
        limpiarFiltros();
        setTimeout(() => {
          setMostrarFiltros(false);
          setAnimandoSalida(false);
        }, 300);
      } else {
        setMostrarFiltros(true);
      }
    };
    

  return (
    <section className={styles.base}>
      <Header
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        mostrarFiltros={mostrarFiltros}
        animandoSalida={animandoSalida}
        genero={genero}
        tipo={tipo}
        orden={orden}
        vista={vista}
        setVista={setVista}      
        setGenero={setGenero}
        setTipo={setTipo}
        setOrden={setOrden}
        toggleFiltros={toggleFiltros}
        peliculas={filteredPeliculas} 
      />

      <div className={styles.carteleraPeliculas}>
        {peliculas.length === 0 ? (
          <p className={styles.aviso}>No hay películas ni series aún.</p>
            ) : filteredPeliculas.length === 0 ? (
          <p className={styles.aviso}>No se encontraron resultados.</p>
            ) : (
          <MovieList 
            movies={filteredPeliculas}
            onToggleVista={onToggleVista}
            onDeleteMovie={eliminarPelicula}
            onEditMovie={editarPelicula}/>
          )}
      </div>

      <button onClick={showAddMovieForm} className={styles.agregarPelicula}> <><Plus /> Agregar Película / Serie</> </button>
      {mostrarFormulario && ( <MovieForm onAddMovie={agregarPelicula} onCancel={() => setMostrarFormulario(false)}/>)}

    </section>
  );
}

