import React, { useState } from "react";

interface CarouselProps {
  images: string[]; // Array of image URLs
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Image Display */}
      <div className="overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg transition-transform duration-100"
        />
      </div>

      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-900 focus:outline-none"
        onClick={goToPrevious}
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-900 focus:outline-none"
        onClick={goToNext}
      >
        ❯
      </button>

      {/* Dots Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
