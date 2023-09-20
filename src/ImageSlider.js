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
      <div style={{ height: '1000px', backgroundColor: 'gold', fontSize: '46px' }}>
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`slider-item ${index === currentIndex ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${imageUrl})`,
              transform: `translateY(-${currentIndex * 100}%)`, 
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
      <h3>The park is one of my favourite places, and I enjoy visiting the park with my family frequently. With my brothers and parents, we play a variety of sports. We savour the fresh air and the beautiful landscapes of the park. The aroma of roses in the air is one of my favourites, particularly in the spring. I love to spend time in the park at this time of year. When we go to the park, my brothers and I play soccer. After that, we take a break by sitting down to relax. After playing in the huge green spaces, we feel hungry and enjoy the dishes we bring along from home. Then we play tug-of-war with our parents. We also sit down and play some games like playing cards and board games.A garden is a place in any home that calms people down and adds beauty to the entire place. The garden at our place is not only beautiful to look at, but it also gives us a chance to cultivate healthy fruits and vegetables and beautiful flowers. We have freshly grown fruits and vegetables that are healthy and safe to consume as they don’t contain any pesticides, insecticides, or artificial colours. Our garden also provides a location for outdoor activities. We play many games and sports to foster our competitive drive and aids in our continual physical activity throughout the day. We have a lot of fun in the garden. The garden also offers mental serenity and a getaway from the routine of life. In the garden, my grandfather practises meditation every morning. Our gardener maintains the garden. He keeps pests at bay, regularly trims the grass, and waters the plants. A tranquil setting like a garden can help us to relax our bodies and minds. Working outdoors is enjoyable and can help you feel refreshed and in control. A garden allows us to be close to nature, where we can hear birds singing joyfully and squirrels jumping from one tree to another. We also have a pet dog and are building a pet house in the garden for him. The pets also feel more energetic in the garden. If someone is passionate about collecting a variety of flowers, they should have a lovely garden where they can grow various flowering plants that will enhance the home’s beauty. We should also practise water conservation. We have constructed a tank in our garden to store rainwater so we can practice rainwater harvesting. I love my favourite place, my garden at home.</h3>
    </div>
  );
};

export default ImageSlider;
