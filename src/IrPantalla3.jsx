import React from 'react';
import { useNavigate } from 'react-router-dom';

export const IrPantalla3 = () => {
  const navigate = useNavigate();

  const navegarPantalla3 = () => {
    navigate('/pantalla3');
  };

  return (
    <button onClick={navegarPantalla3}>
      IR A LA PANTALLA 3
    </button>
  );
};