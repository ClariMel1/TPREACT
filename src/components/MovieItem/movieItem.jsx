import React from "react";
import styles from "./MovieItem.module.css";

export default function MovieItem({ movie, onClick }) {
    return (
      <div 
        onClick={() => onClick?.(movie)}
      >
        <h3 className="text-lg font-semibold">{movie.titulo}</h3>
        <p><span className="font-medium">Director:</span> {movie.director}</p>
        <p><span className="font-medium">Año:</span> {movie.anio}</p>
        <p><span className="font-medium">Género:</span> {movie.genero}</p>
        <p><span className="font-medium">Tipo:</span> {movie.tipo}</p>
        <p><span className="font-medium">Rating:</span> ⭐ {movie.rating}</p>
      </div>
    );
  }