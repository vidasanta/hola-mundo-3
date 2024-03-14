import React from 'react';
import './VideoYoutube.css';

export const VideoYoutube = ({ videoUrl }) => {
    return (
        <div style={{backgroundColor: 'blue'}}>
            <iframe
                width="560"
                height="315"
                src={videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}


