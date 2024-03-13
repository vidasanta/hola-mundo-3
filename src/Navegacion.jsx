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

// En este ejemplo, Navegacion es un componente separado que renderiza los enlaces, y las rutas se definen dentro del componente App.

//Es un componente de navegación de React Router que renderiza tres enlaces (Link) para diferentes rutas (/pantalla1, /pantalla2 y /pantalla3)