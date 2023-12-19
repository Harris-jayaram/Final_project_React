// src/components/BackgroundVideo.js
import React from 'react';

const BackgroundVideo = () => {
  return (
    <video autoPlay muted loop style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
      <source src="C:\Users\R.Harris jayaram\Clg\Music\react-harris\navbar\src\pages\DNA Hologram. After Effects!.mp4" type="video/mp4" />
      {/* Add additional source elements for different video formats if needed */}
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;
