/* ImageSlider.js */

import React, { useState } from 'react';
import './ImageSlider.css'; // Import your CSS file for styling
import img1 from '../src/Image/img1.jpg'; // Import the image files with correct paths and extensions
import img2 from '../src/Image/img2.jpg';
import img3 from '../src/Image/img3.jpg';
import img4 from '../src/Image/img4.jpg';

const images = [img1, img2, img3, img4]; // Use imported image components

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="parallax">
      <div style={{ height: '1000px', backgroundColor: 'red', fontSize: '36px' }}>
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`slider-item ${index === currentIndex ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${imageUrl})`,
              transform: `translateY(-${currentIndex * 100}%)`, // Adjust parallax effect
            }}
          ></div>
        ))}
      </div>
      <button className="slider-button prev" onClick={handlePrev}>
        Previous
      </button>
      <button className="slider-button next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
