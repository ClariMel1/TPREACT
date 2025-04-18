import { useState } from "react";
import Titulo from "../Title/title";

export default function MovieForm({onAddMovie , onSubmit, initialData = {}, modo = "agregar" }) {

  const [titulo, setTitulo] = useState(initialData.titulo || "");
  const [director, setDirector] = useState(initialData.director || "");
  const [anio, setAno] = useState(initialData.anio || "");
  const [genero, setGenero] = useState(initialData.genero || "");
  const [rating, setRating] = useState(initialData.rating || "");
  const [tipo, setTipo] = useState(initialData.tipo || "película");
  const [imagen, setImagen] = useState(initialData.imagen || "");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const nuevaPelicula = {
      id: initialData.id || Date.now(), 
      titulo,
      director,
      anio,
      genero,
      rating,
      tipo,
      imagen,
      vista: initialData.vista || false 
    };

    if (modo === "editar" && onSubmit) {
      onSubmit(nuevaPelicula);
    } else if (modo === "agregar" && onAddMovie) {
      onAddMovie(nuevaPelicula);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
       <Titulo texto={modo === "editar" ? "Editar" : "Agregar a la coleccion"} />
      
      <div className="mb-3">
        <label htmlFor="titulo" className="block">Título:</label>
        <input id="titulo" type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required/>
      </div>

      <div className="mb-3">
        <label htmlFor="director" className="block">Director:</label>
        <input id="director" type="text" value={director} onChange={(e) => setDirector(e.target.value)}required/>
      </div>

      <div className="mb-3">
        <label htmlFor="anio" className="block">Año:</label>
        <input id="anio" type="number" value={anio} onChange={(e) => setAno(e.target.value)} required/>
      </div>

      <div className="mb-3">
        <label htmlFor="genero" className="block">Género:</label>
        <select id="genero"value={genero} onChange={(e) => setGenero(e.target.value)}required>
          <option value="">Seleccionar Género</option>
          <option value="Acción">Acción</option>
          <option value="Comedia">Comedia</option>
          <option value="Drama">Drama</option>
          <option value="Terror">Terror</option>
          <option value="Ciencia Ficción">Ciencia Ficción</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="rating" className="block">Rating:</label>
        <input id="rating" type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} required />
      </div>

      <div className="mb-3">
        <label htmlFor="tipo" className="block">Tipo:</label>
        <select id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="película">Película</option>
          <option value="serie">Serie</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="imagen" className="block">URL de Imagen:</label>
        <input id="imagen" type="url" value={imagen} onChange={(e) => setImagen(e.target.value)} placeholder="https://ejemplo.com/imagen.jpg" />
      </div>


      <button type="submit">
        {modo === "editar" ? "Guardar Cambios" : "Agregar"}
      </button>

    </form>
  );
}
