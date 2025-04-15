
import { useState } from "react";

export default function MovieForm({onAddMovie}) {
  const [titulo, setTitulo] = useState("");
  const [director, setDirector] = useState("");
  const [anio, setAno] = useState("");
  const [genero, setGenero] = useState("");
  const [rating, setRating] = useState("");
  const [tipo, setTipo] = useState("película");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const nuevaPelicula = {
      id: Date.now(), 
      titulo,
      director,
      anio,
      genero,
      rating,
      tipo
    };

    onAddMovie(nuevaPelicula); 
    console.log("Nueva Película o Serie:", nuevaPelicula);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2> Agregar nueva Película o Serie a la lista!</h2>
      
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

      <button type="submit"> Agregar </button>
    </form>
  );
}
