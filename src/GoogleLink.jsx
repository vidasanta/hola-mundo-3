import React from 'react';

export const  GoogleLink = () => {
  const handleClick = () => {
    window.open('http://www.google.com', '_blank');
  };

  return (
    <button onClick={handleClick}>
      Ir a Google
    </button>
  );
}



