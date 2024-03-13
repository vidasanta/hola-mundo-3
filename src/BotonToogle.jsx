import React, { useState } from 'react';

export const BotonToogle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isOn ? 'Apagar' : 'Encender'}
      </button>
    </div>
  );
}


