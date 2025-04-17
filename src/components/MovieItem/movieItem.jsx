import React, { useState } from "react";
import styles from "./MovieItem.module.css";

export default function MovieItem({ movie, onToggleVista, onDelete, onEdit }) {
  const [editando, setEditando] = useState(false);
  const [tituloEditado, setTituloEditado] = useState(movie.titulo);

  const manejarGuardar = () => {
    const peliculaActualizada = { ...movie, titulo: tituloEditado };
    onEdit(peliculaActualizada);
    setEditando(false);
  };

  return (
    <div className={styles.movie}>
      
        {movie.imagen && (
        <img
          src={movie.imagen}
          alt={`Imagen de ${movie.titulo}`}
          className={styles.movieImage}
          />
        )}

      <div className={styles.infoMovie}>
        {editando ? (
          <>
            <input
              type="text"
              value={tituloEditado}
              onChange={(e) => setTituloEditado(e.target.value)}
            />
            <button onClick={manejarGuardar}> Guardar</button>
            <button onClick={() => setEditando(false)}> Cancelar</button>
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold">{movie.titulo}</h3>
            <p><span className="font-medium">Director:</span> {movie.director}</p>
            <p><span className="font-medium">Año:</span> {movie.anio}</p>
            <p><span className="font-medium">Género:</span> {movie.genero}</p>
            <p><span className="font-medium">Tipo:</span> {movie.tipo}</p>
            <p><span className="font-medium">Rating:</span> ⭐ {movie.rating}</p>
            <button onClick={() => setEditando(true)}> Editar</button>
            <button onClick={() => onDelete(movie.id)}> Eliminar</button>

            <button onClick={() => onToggleVista(movie.id)}>
              {movie.vista ? 'Vista' : 'No Vista'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
