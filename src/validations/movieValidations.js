import * as yup from 'yup';

export const movieFormSchema = yup.object().shape({
  titulo: yup.string().required("El título es obligatorio"),
  director: yup.string().required("El director es obligatorio"),
  anio: yup
    .number()
    .min(1800, "El año no puede ser menor a 1800")
    .max(new Date().getFullYear(), "El año no puede ser mayor al actual")
    .required("El año es obligatorio"),
  genero: yup.string().required("El género es obligatorio"),
  rating: yup
    .number()
    .min(1, "La calificación mínima es 1")
    .max(5, "La calificación máxima es 5")
    .required("La calificación es obligatoria"),
  tipo: yup.string().required("El tipo es obligatorio"),
  imagen: yup
    .string()
    .url("Debe ser una URL válida")
    .required("La URL de la imagen es obligatoria"),
});
