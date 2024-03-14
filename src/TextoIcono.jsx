import React from 'react';
import { Icon } from '@iconify/react';

export const TextoIcono = ({ texto, tamanoIcono, tamanoLetra, colorLetra, tipoLetra, nombreIcono }) => {
  const estilo = {
    fontSize: tamanoLetra,
    color: colorLetra,
    fontFamily: tipoLetra,
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <p style={estilo}>{texto}</p>
      <Icon icon={nombreIcono} width={tamanoIcono} height={tamanoIcono} />
    </div>
  );
};

{/* no olvidar : npm i @iconify/react 
Buscando esa libreria en internet se encuntra todos esos iiconos*/}