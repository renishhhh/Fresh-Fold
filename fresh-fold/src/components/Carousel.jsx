import { width } from '@fortawesome/free-solid-svg-icons/fa0';
import React, { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "./carousel1.png", alt: "First slide",  },
    { src: "./carousel2.png", alt: "Second slide" },
    { src: "./carousel3.png", alt: "Third slide" }
  ];

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-[44rem] h-[47rem] mx-auto overflow-hidden rounded-lg shadow-lg ">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full transition-opacity duration-500"
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          >
            <img src={image.src} alt={image.alt} className="w-full h-full" />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-2xl p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-2xl p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            className={`mx-1 w-3 h-3 rounded-full cursor-pointer mb-3 ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
