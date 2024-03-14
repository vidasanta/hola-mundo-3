import React from 'react';

export const Video = ({ videoUrl, width, height, backgroundColor }) => {
  return (
    <div className={`video-player ${backgroundColor}`}>
      <video src={videoUrl} width={width} height={height} controls />
      <style>{`
        .video-player {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
        }
        .bg-dark {
          background-color: #333;
        }
        .bg-light {
          background-color: #f5f5f5;
        }
      `}</style>
    </div>
  );
};



