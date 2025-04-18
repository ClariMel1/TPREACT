export default function Filter({
  generoSeleccionado,
  tipoSeleccionado,
  ordenSeleccionado,
  onGeneroChange,
  onTipoChange,
  onOrdenChange,
}) {
  return (
    <div className="filtros">
      <select value={generoSeleccionado} onChange={(e) => onGeneroChange(e.target.value)}>
        <option value="">Todos los géneros</option>
        <option value="Acción">Acción</option>
        <option value="Comedia">Comedia</option>
        <option value="Drama">Drama</option>
        <option value="Terror">Terror</option>
        <option value="Ciencia Ficción">Ciencia Ficción</option>
      </select>

      <select value={tipoSeleccionado} onChange={(e) => onTipoChange(e.target.value)}>
        <option value="">Películas y series</option>
        <option value="película">Película</option>
        <option value="serie">Serie</option>
      </select>

      <select value={ordenSeleccionado} onChange={(e) => onOrdenChange(e.target.value)}>
        <option value="">Ordenar por</option>
        <option value="anio-asc">Año ↑</option>
        <option value="anio-desc">Año ↓</option>
        <option value="rating-asc">Rating ↑</option>
        <option value="rating-desc">Rating ↓</option>
      </select>
    </div>
  );
}
