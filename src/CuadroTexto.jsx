


import React from 'react';
import './CuadroTexto.css'; // Importa el archivo CSS

export const CuadroTexto = ({ señal }) => {
  return (
    <div className={`estado ${señal ? 'encendido' : 'apagado'}`}>
      {señal ? 'ENCENDIDO' : 'APAGADO'}
    </div>
  );
};







