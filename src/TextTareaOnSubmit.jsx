import React, { useState } from 'react';

export const TextTareaOnSubmit = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('El comentario enviado es: ' + value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comentario:
        <textarea value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Enviar" />
    </form>
  );
};


