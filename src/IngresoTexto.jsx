import React, { useState } from 'react';

export const IngresoTexto = () => {
  const [inputText, setInputText] = useState('');
  const [datito, setDatito] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    setDatito(inputText);
    setInputText('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Ingrese su texto aquí"
      />
      <button onClick={handleButtonClick}>Presione el botón para almacenar sus datos</button>
      {datito && <p>Datos almacenados: {datito}</p>}
       </div>
  );
};

