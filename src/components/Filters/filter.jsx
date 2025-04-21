import styles from './filter.module.css';
import { useState } from 'react';
import Dropdown from '../Dropdown/dropdown';

export default function Filter({  
  generoSeleccionado,
  tipoSeleccionado,
  ordenSeleccionado,
  vistoSeleccionado,
  onGeneroChange,
  onTipoChange,
  onOrdenChange,
  onVistaChange}) {

  const [openDropdownId, setOpenDropdownId] = useState(null);

  return (
    <div className={styles.filtros}>
      <Dropdown id="genre" label="Género" value={generoSeleccionado} options={['Acción', 'Comedia', 'Drama', 'Terror', 'Ciencia Ficción']} defaultOption="Todos los géneros" onChange={onGeneroChange} isOpen={openDropdownId === 'genre'} setOpenDropdown={setOpenDropdownId} />
      <Dropdown id="type" label="Tipo" value={tipoSeleccionado} options={['película', 'serie']} defaultOption="Películas y series" onChange={onTipoChange} isOpen={openDropdownId === 'type'} setOpenDropdown={setOpenDropdownId} />
      <Dropdown id="orden" label="Orden" value={ordenSeleccionado} options={[
        { label: 'Año ↑', value: 'anio-asc' }, 
        { label: 'Año ↓', value: 'anio-desc' }, 
        { label: 'Rating ↑', value: 'rating-asc' }, 
        { label: 'Rating ↓', value: 'rating-desc' }]} 
        defaultOption="Ordenar por" onChange={onOrdenChange} isOpen={openDropdownId === 'orden'} setOpenDropdown={setOpenDropdownId} />
      <Dropdown id="vista" label="Visto" value={vistoSeleccionado} options={['Vistas', 'No vistas']} defaultOption="Todas" onChange={onVistaChange} isOpen={openDropdownId === 'vista'} setOpenDropdown={setOpenDropdownId} />
    </div>
  );
}
