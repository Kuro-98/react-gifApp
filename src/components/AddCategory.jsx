import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    //event es necesario para controlar la recarga de la pagina y evitarlo con preventDefault
    //todo esto se ejecutara al momento de precionar enter.
    event.preventDefault();
    if (inputValue.trim().length <= 1) return; //aqui validamos que si la palabra que se escribe es menor a 1, no realice nada.
    //de lo contrario le pasara el valor sin espacios al componente mediante onNewCategory
    // setCategories((cositas) => [...cositas, inputValue]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
