import React, { useState } from 'react';

export const ImageViewer = () => {
  const [showModal, setShowModal] = useState(false);
  const imageUrl = 'https://wallpapers.com/images/high/4k-blue-minimalist-deer-5fc2dalaakntatt7.jpg';

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleShowModal}>Ver imagen</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <img src={imageUrl} alt="Imagen" />
          </div>
        </div>
      )}
    </div>
  );
};

