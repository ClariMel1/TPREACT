import React, { useState } from "react";
import styles from "./MovieItem.module.css";
import MovieForm from "../MovieForm/movieForm";
import { EyeClosed, Eye, CircleX, Pencil} from 'lucide-react';

export default function MovieItem({ movie, onToggleVista, onDelete, onEdit }) {
  const [editando, setEditando] = useState(false);
  
  return (
    <div className={styles.movie}>
      
        {!editando && movie.imagen && (
        <img src={movie.imagen} alt={`Imagen de ${movie.titulo}`} className={styles.movieImage} />
        )}

      <div className={styles.infoMovie}>
        {editando ? (
                <MovieForm
                initialData={movie}
                onSubmit={(peliculaActualizada) => {
                  onEdit(peliculaActualizada);
                  setEditando(false);
                }}
                modo="editar"
              />
        ) : (
          <>
            <h3 className="text-lg font-semibold">{movie.titulo}</h3>
            <p><span className="font-medium">Director:</span> {movie.director}</p>
            <p><span className="font-medium">Año:</span> {movie.anio}</p>
            <p><span className="font-medium">Género:</span> {movie.genero}</p>
            <p><span className="font-medium">Tipo:</span> {movie.tipo}</p>
            <p><span className="font-medium">Rating:</span> ⭐ {movie.rating}</p>
            <button onClick={() => setEditando(true)}> <Pencil /> </button>
            <button onClick={() => onDelete(movie.id)}> <CircleX /></button>
            <button onClick={() => onToggleVista(movie.id)}>
              {movie.vista ? <Eye/> : <EyeClosed />}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
