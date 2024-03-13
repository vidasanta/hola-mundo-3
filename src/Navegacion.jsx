import React from 'react';
import { Link } from 'react-router-dom';
import './Navegacion.css'

export const Navegacion = () => {
    return (
        <div className="Navegacion">
            <Link to="/pantalla4">Que Somos</Link>
            <Link to="/pantalla2">Servicios</Link>
            <Link to="/pantalla3">Contáctanos</Link>
        </div>
    );
}


