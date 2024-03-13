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


// Explicación:

   // Importamos el hook useState de React para manejar el estado del componente.
    //Creamos un componente funcional llamado ImageViewer.
    //Dentro del componente, utilizamos el hook useState para crear un estado showModal y una función setShowModal para actualizar ese estado.
    //Definimos la URL de la imagen en la variable imageUrl.
    //Creamos dos funciones, handleShowModal y handleCloseModal, que actualizan el estado showModal a true y false, respectivamente.
    //En el JSX, renderizamos un botón con el texto "Ver imagen" y un evento onClick que llama a la función handleShowModal.
    //Utilizamos un operador lógico && para renderizar el contenido de la ventana modal solo cuando showModal es true.
    //Dentro de la ventana modal, renderizamos un elemento div con la clase modal-content.
    //Dentro de modal-content, renderizamos un elemento span con la clase close y un evento onClick que llama a la función handleCloseModal. Este será el botón de cierre de la ventana modal.
    //Finalmente, renderizamos la imagen utilizando la etiqueta img y la URL de la imagen definida en imageUrl.

//Este código crea un componente con un botón "Ver imagen". Cuando se hace clic en el botón, se muestra una ventana modal con la imagen y un botón de cierre. Al hacer clic en el //botón de cierre, la ventana modal se oculta.  