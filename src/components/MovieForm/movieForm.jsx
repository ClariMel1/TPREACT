import { useState, useEffect } from "react";
import Titulo from "../Title/title";
import styles from './movieForm.module.css';
import Dropdown from '../Dropdown/dropdown';
import Input from '../Input/input';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { movieFormSchema } from "../../validations/movieValidations";

import {X, Clapperboard} from 'lucide-react';

export default function MovieForm({onAddMovie , onSubmit, initialData = {}, modo = "agregar" , onCancel}) {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(movieFormSchema),
    defaultValues: initialData,
  });

  const [showForm, setShowForm] = useState(true);
  const [genero, setGenero] = useState(initialData.genero || "");
  const [tipo, setTipo] = useState(initialData.tipo || "película");


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
      vista: initialData.vista || false 
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
  };

  if (!showForm) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.botonCerrar} type="button" onClick={handleCancel}>  <X /> </button>
        <form className={styles.formulario} onSubmit={handleSubmit(onFormSubmit)}>
          <Titulo className={styles.titulo} texto={modo === "editar" ? "Editar" : <>Agregar a la colección <Clapperboard /></>} />

          <div className={styles.filaForm1}>
            <Input id="titulo" type="text" placeholder="Título de la película o serie" label="Título" register={register} error={errors.titulo}/>
            <Input id="director" type="text"  placeholder="Director de la película o serie" label="Director" register={register} error={errors.director}/>
            <Input id="anio" type="number"  placeholder="Año de estreno" label="Año" register={register} error={errors.anio}/>
            <Input id="rating" type="number" min="1" max="5" placeholder="Calificación del 1 al 5" label="Rating" register={register} error={errors.rating}/>
          </div>

          <div className={styles.filaForm2}>
            <Input className={styles.input} id="imagen" type="url" placeholder="https://ejemplo.com/imagen.jpg" label="URL de Imagen" required={true} register={register} error={errors.imagen} />
            <Dropdown   className={styles.dropdown} value={genero} options={['Acción', 'Comedia', 'Drama', 'Terror', 'Ciencia Ficción']} defaultOption="Seleccionar género" onChange={(val) => setGenero(val)} />
            <Dropdown   className={styles.dropdown}  value={tipo} options={['película', 'serie']} defaultOption="Seleccionar tipo" onChange={(val) => setTipo(val)} />
          </div>

          <button className={styles.botonEnviar} type="submit"> {modo === "editar" ? "Guardar Cambios" : "Agregar"} </button>
        </form>
      </div>
    </div>
  );
}
