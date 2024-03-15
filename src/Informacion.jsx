import React from 'react';

const Informacion = ({ numeral}) => {
  const cuadrado=numeral*numeral
  return (
    <div>
      <h1>Valor de numeral al cuadrado es : {cuadrado}</h1>
    </div>
  );
};

export default Informacion;
