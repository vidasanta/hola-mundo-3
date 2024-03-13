

import React, { useState } from 'react';
import './Tabla.css'; // Archivo CSS para estilos

export const Tabla = ({ filas, columnas }) => {
  const [headers, setHeaders] = useState([]); // Estado para almacenar los encabezados
  const [cellValues, setCellValues] = useState([]); // Estado para almacenar los valores de las celdas

  // Generar las filas y celdas
  const renderFilas = () => {
    const filasArray = [];
    for (let i = 0; i < filas; i++) {
      const celdasArray = [];
      for (let j = 0; j < columnas; j++) {
        const value = cellValues[i] && cellValues[i][j] ? cellValues[i][j] : '';
        celdasArray.push(
          <td key={j}>
            <input
              type="text"
              value={value}
              onChange={(e) => handleCellValueChange(i, j, e.target.value)}
            />
          </td>
        );
      }
      filasArray.push(<tr key={i}>{celdasArray}</tr>);
    }
    return filasArray;
  };

  // Actualizar los valores de las celdas
  const handleCellValueChange = (rowIndex, colIndex, newValue) => {
    const updatedCellValues = [...cellValues];
    if (!updatedCellValues[rowIndex]) {
      updatedCellValues[rowIndex] = [];
    }
    updatedCellValues[rowIndex][colIndex] = newValue;
    setCellValues(updatedCellValues);
  };

  // Renderizar los encabezados
  const renderHeaders = () => {
    return headers.map((header, index) => (
      <th key={index}>{header}</th>
    ));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese los encabezados separados por comas"
        onChange={(e) => setHeaders(e.target.value.split(','))}
      />
      <table className="mi-tabla">
        <thead>
          <tr>{renderHeaders()}</tr>
        </thead>
        <tbody>{renderFilas()}</tbody>
      </table>
    </div>
  );
};







