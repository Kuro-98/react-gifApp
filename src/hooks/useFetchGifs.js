import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    //la primera parte es el codigo que queremos ejecutar/
    getImages();
  }, []); //el arreglo significa que solo se efectuara la primera vez y solo esa vez,

  return {
    images,
    isLoading,
  };
};
