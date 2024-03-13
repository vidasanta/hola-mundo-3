import React from 'react';
import './ImageZoom.css'; 

export const ImageZoom = ({ src, scale }) => {
  return (
    <div className="zoom-container" style={{ '--scale': scale }}>
      <img src={src} alt="zoomable" className="zoom-image" />
    </div>
  );
};


