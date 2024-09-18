import React, { useRef, useState } from 'react';
import './Videopart.css';

const Videopart = () => {
  const videoRef = useRef(null); // Create a ref for the video element
  const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause

  const handlePlayPauseClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play(); // Play the video if paused
        setIsPlaying(true); // Update state to playing
      } else {
        videoRef.current.pause(); // Pause the video if playing
        setIsPlaying(false); // Update state to paused
      }
    }
  };

  return (
    <div className='video-container'>
      <video ref={videoRef} className='video1'>
        <source src='./assets/energy.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='play-button' onClick={handlePlayPauseClick}>
        <img
          src={isPlaying ? './assets/pause.png' : './assets/playicon.png'}
          alt={isPlaying ? 'Pause' : 'Play'}
        />
      </div>
    </div>
  );
};

export default Videopart;
