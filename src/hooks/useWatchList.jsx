import { useState, useEffect } from 'react';

const useWatchList = (key, defaultValue) => {
  const [items, setItems] = useState(() => {
    try {
      const savedItems = localStorage.getItem(key);

      return savedItems ? JSON.parse(savedItems) : defaultValue;
    } catch (error) {
 
      console.error('Error al obtener datos de localStorage:', error);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(items));
    } catch (error) {
      console.error('Error al guardar datos en localStorage:', error);
    }
  }, [key, items]);
  return [items, setItems];
};

export default useWatchList;