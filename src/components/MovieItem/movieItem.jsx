import React, { useState } from "react";
import styles from "./MovieItem.module.css";
import MovieForm from "../MovieForm/movieForm";
import Titulo from "../Title/title";
import { EyeClosed, Eye, CircleX, Pencil, Star} from 'lucide-react';

export default function MovieItem({ movie, onToggleVista, onDelete, onEdit }) {
  const [editando, setEditando] = useState(false);

  return (
    <div className={`${styles.movie} ${editando ? styles.noHover : ""}`}>
      <img src={movie.imagen} alt={`Imagen de ${movie.titulo}`} className={styles.movieImage} />
      <div className={styles.movieInfo}>
        <Titulo className={styles.titulo} texto={movie.titulo}></Titulo>

        <p>{movie.genero} | {movie.tipo}</p>
        <div className={styles.info}>
          <p> <Star /> {movie.rating}</p>
          <p>{movie.anio}</p>
        </div>
        
        <button className={`${styles.botonAccion} ${styles.eliminar}`} onClick={() => onDelete(movie.id)}><CircleX /></button>
        <button className={`${styles.botonAccion} ${styles.editar}`} onClick={() => setEditando(true)}><Pencil /></button>
        <button className={`${styles.botonAccion} ${styles.visto}`} onClick={() => onToggleVista(movie.id)}>{movie.vista ? <Eye /> : <EyeClosed />}</button>
      </div>

      {editando && (
        <MovieForm
          initialData={movie}
          onSubmit={(peliculaActualizada) => {
            onEdit(peliculaActualizada);
            setEditando(false);
          }}
          onCancel={() => setEditando(false)}
          modo="editar"
        />
      )}
    </div>
  );
}
