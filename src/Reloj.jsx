import React, { useState, useEffect } from 'react';

export const Reloj = () => {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setHora(new Date());
  };

  return (
    <div>
      <h2>Son las {hora.toLocaleTimeString()}.</h2>
    </div>
  );
}
