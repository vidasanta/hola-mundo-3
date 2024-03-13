


import React from 'react';
import './CuadroTexto.css'; // Importa el archivo CSS

export const CuadroTexto = ({ datito2 }) => {
  return (
    <div className={`estado ${datito2 ? 'encendido' : 'apagado'}`}>
      {datito2 ? 'ENCENDIDO' : 'APAGADO'}
    </div>
  );
};







