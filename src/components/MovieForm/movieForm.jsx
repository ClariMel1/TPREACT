import { useState, useEffect } from "react";
import Titulo from "../Title/title";
import styles from './movieForm.module.css';
import Dropdown from '../Dropdown/dropdown';
import Input from '../Input/input';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { movieFormSchema } from "../../validations/movieValidations";

import {X} from 'lucide-react';

export default function MovieForm({onAddMovie , onSubmit, initialData = {}, modo = "agregar" , onCancel}) {

  const { register, handleSubmit, formState: { errors } } = useForm({
    // Elimina la validación de yup temporalmente porque no me anda y no entiendo bn como funciona
    // resolver: yupResolver(movieFormSchema),
    defaultValues: initialData,
  });

  const [showForm, setShowForm] = useState(true);
  const [genero, setGenero] = useState(initialData.genero || "");
  const [tipo, setTipo] = useState(initialData.tipo || "");
  const [vista, setVista] = useState( initialData.vista !== undefined ? initialData.vista : false );
  const [openDropdownId, setOpenDropdownId] = useState(null);



  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = ''; 
    };
  }, [showForm]);

 const onFormSubmit = (data) => {
  
    const nuevaPelicula = {
      id: initialData.id || Date.now(), 
      ...data,
      genero,
      tipo,
      vista
    };

    if (modo === "editar" && onSubmit) {
      onSubmit(nuevaPelicula);
    } else if (modo === "agregar" && onAddMovie) {
      onAddMovie(nuevaPelicula);
    }

    setShowForm(false); 
  };

  const handleCancel = () => {
    setShowForm(false);
    if (onCancel) onCancel();
    setGenero('');
    setTipo('película');
  };

  if (!showForm) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.botonCerrar} type="button" onClick={handleCancel}>  <X /> </button>
        <form className={styles.formulario} onSubmit={handleSubmit(onFormSubmit)}>
          <Titulo className={styles.titulo} texto={modo === "editar" ? "Editar" : "Agregar nueva pelicula o serie" } />

          <div className={styles.filaForm1}>
            <Input className={`${styles.input}`} id="titulo" type="text" placeholder="Título de la película o serie" label="Título" register={register} error={errors.titulo}/>
            <Input className={`${styles.input}`} id="director" type="text"  placeholder="Director de la película o serie" label="Director" register={register} error={errors.director}/>
            <Input  className={`${styles.inputSmall}`} id="anio" type="number"  placeholder="Año de estreno" label="Año" register={register} error={errors.anio}/>
          </div>

          <div className={styles.filaForm2}>
            <Input className={styles.input} id="imagen" type="url" placeholder="https://ejemplo.com/imagen.jpg" label="URL de Imagen" required={true} register={register} error={errors.imagen} />
            <Input className={styles.rating} id="rating" type="number" min="1" max="5" placeholder="Calificación del 1 al 5" label="Rating" register={register} error={errors.rating}/>
          </div>

          <div className={styles.filaForm3}>
          <Dropdown className={styles.dropdown} value={genero} options={['Acción', 'Comedia', 'Drama', 'Terror', 'Ciencia Ficción']} defaultOption="Seleccionar género" onChange={(val) => setGenero(val)} isOpen={openDropdownId === 'genero'} setOpenDropdown={() => setOpenDropdownId(openDropdownId === 'genero' ? null : 'genero')} />
  
  <Dropdown className={styles.dropdown} value={tipo} options={['película', 'serie']} defaultOption="Seleccionar tipo" onChange={(val) => setTipo(val)} isOpen={openDropdownId === 'tipo'} setOpenDropdown={() => setOpenDropdownId(openDropdownId === 'tipo' ? null : 'tipo')} />
  
  <Dropdown className={styles.dropdown} value={vista ? 'Vista' : 'No vista'} options={['Vista', 'No vista']} defaultOption="Seleccionar estado" onChange={(val) => setVista(val === 'Vista')} isOpen={openDropdownId === 'vista'} setOpenDropdown={() => setOpenDropdownId(openDropdownId === 'vista' ? null : 'vista')} />
          </div>

          <button className={styles.botonEnviar} type="submit"> {modo === "editar" ? "Guardar Cambios" : "Agregar"} </button>
        </form>
      </div>
    </div>
  );
}
