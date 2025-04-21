import React from 'react';
import Titulo from '../Title/title';
import MovieCounter from '../MovieCounter/movieCounter';
import Search from '../Search/Search';
import Filter from '../Filters/filter';
import { Sparkles, X } from 'lucide-react';
import styles from './header.module.css'; 

const Header = ({
  searchTerm,
  handleSearchChange,
  mostrarFiltros,
  animandoSalida,
  genero,
  tipo,
  orden,
  vista,
  setVista,
  setGenero,
  setTipo,
  setOrden,
  toggleFiltros,
  peliculas
}) => {
  return (
    <header className={styles.header}>
      <Titulo texto={"POPCORN & CINE"} />
      <MovieCounter peliculas={peliculas} />

      <div className={styles.buscaFiltra}>
        <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <div
          className={` ${styles.filtrosOcultos} ${mostrarFiltros && !animandoSalida ? styles.filtrosVisibles : ''}  ${animandoSalida ? styles.filtrosSalida : ''}`}
        >
          {(mostrarFiltros || animandoSalida) && (
            <Filter
              generoSeleccionado={genero}
              tipoSeleccionado={tipo}
              ordenSeleccionado={orden}
              vistoSeleccionado={vista}
              onVistaChange={setVista}
              onGeneroChange={setGenero}
              onTipoChange={setTipo}
              onOrdenChange={setOrden}
            />
          )}
        </div>
        <button onClick={toggleFiltros} className={styles.filtroIcono}>
          <span className={`${styles.icono} ${mostrarFiltros ? styles.rotado : ''}`}>
            {mostrarFiltros ? <X /> : <Sparkles />}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
