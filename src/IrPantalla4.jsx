import React from 'react';
import { useNavigate } from 'react-router-dom';
import './IrPantalla4.css'

export const IrPantalla4 = () => {
  const navigate = useNavigate();

  const navegarPantalla4 = () => {
    navigate('/pantalla4');
  };

  return (
    <button className="boton-pantalla4" onClick={navegarPantalla4}>
      IR A LA PANTALLA 4
    </button>
  );
};