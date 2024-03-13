import React from 'react';

export const TextoVerdeRojo = ({ datito }) => {
  const estilo = {
    color: datito ? 'green' : 'red',
  };

  return <p style={estilo}>{datito.toString()}</p>;
};


