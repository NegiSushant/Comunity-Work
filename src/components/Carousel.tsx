import React, { useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <img
          src={images[currentIndex]}
          alt={`Temple view ${currentIndex + 1}`}
          className="w-full h-64 sm:h-80 md:h-[28rem] lg:h-[32rem] object-cover transition-opacity duration-500"
        />

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button
          onClick={goToNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
          aria-label="Next slide"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentIndex === idx
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

// import React, { useState } from "react";

// interface CarouselProps {
//   images: string[]; // Array of image URLs
// }

// const Carousel: React.FC<CarouselProps> = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrevious = () => {
//     setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
//   };

//   const goToNext = () => {
//     setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
//   };

//   return (
//     <div className="relative w-full max-w-4xl mx-auto">
//       {/* Image Display */}
//       <div className="overflow-hidden">
//         <img
//           src={images[currentIndex]}
//           alt={`Slide ${currentIndex + 1}`}
//           className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg transition-transform duration-100"
//         />
//       </div>

//       {/* Previous Button */}
//       <button
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-900 focus:outline-none"
//         onClick={goToPrevious}
//       >
//         ❮
//       </button>

//       {/* Next Button */}
//       <button
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-900 focus:outline-none"
//         onClick={goToNext}
//       >
//         ❯
//       </button>

//       {/* Dots Indicators */}
//       <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
//         {images.map((_, idx) => (
//           <button
//             key={idx}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === idx ? "bg-white" : "bg-gray-400"
//             }`}
//             onClick={() => setCurrentIndex(idx)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
