
import React from 'react';
import './Wishlist.css';

export const Wishlist = ({ products }) => {
    return (
        <div className="wishlist">
            <h2>Mi Lista de Deseos</h2>
            {products.map(item => (
                <div key={item.id} className="wishlist-item">
                    {item.name}
                </div>
            ))}
        </div>
    );
};





