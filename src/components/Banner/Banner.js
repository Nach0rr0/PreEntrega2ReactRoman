import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { data } from "./data";
import './Banner.css'; 

export const Banner = () => {
  const [autoplay,] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % data.length);
      }, 5000); 
      return () => clearInterval(interval);
    }
  }, [currentIndex, autoplay]);

  return (
    <div className="main-container">
      <Carousel
        showArrows={true}
        showThumbs={false}
        selectedItem={currentIndex} 
        onChange={index => setCurrentIndex(index)} 
      >
        {data.map((item) => (
          <div key={item.id} className="slider-item">
            <img src={item.img} alt={`Slide ${item.id}`} />
          </div>
        ))}
      </Carousel>
      <h1>Nuevos lanzamientos Primavera 2023</h1>


    </div>
  );
};

export default Banner;
