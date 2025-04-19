import styles from './filter.module.css';
import Dropdown from '../Dropdown/dropdown';

export default function Filter({
  generoSeleccionado,
  tipoSeleccionado,
  ordenSeleccionado,
  onGeneroChange,
  onTipoChange,
  onOrdenChange,
}) {
  return (
    <div className={styles.filtros}>
      <Dropdown label="Género" value={generoSeleccionado} options={['Acción', 'Comedia', 'Drama', 'Terror', 'Ciencia Ficción']} defaultOption="Todos los géneros" onChange={onGeneroChange} />
      <Dropdown label="Tipo" value={tipoSeleccionado} options={['película', 'serie']} defaultOption="Películas y series" onChange={onTipoChange} />
      <Dropdown label="Orden" value={ordenSeleccionado}
        options={[
          { label: 'Año ↑', value: 'anio-asc' },
          { label: 'Año ↓', value: 'anio-desc' },
          { label: 'Rating ↑', value: 'rating-asc' },
          { label: 'Rating ↓', value: 'rating-desc' },
        ]}
        defaultOption="Ordenar por" onChange={onOrdenChange}/>
    </div>
  );
}
