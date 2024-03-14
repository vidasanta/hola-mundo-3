import React from 'react';

export const Card = ({ title, image, description, height, width, backgroundColor }) => (
    <div className="card" style={{backgroundColor: backgroundColor}}>
        <img src={image} alt={title} style={{height: height, width: width}} />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
);


