import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const images = [
  { id: 1, src: "/assets/img1.jpg", alt: "Image 1" },
  { id: 2, src: "/assets/img_2.jpg", alt: "Image 2" },
  { id: 3, src: "/assets/img_3.jpg", alt: "Image 3" },
  { id: 4, src: "/assets/img_4.jpg", alt: "Image 4" },
  { id: 5, src: "/assets/IMG-20220227-WA0007.jpg", alt: "Image 5" },
  { id: 6, src: "/assets/img_6.jpg", alt: "Image 6" },
  { id: 7, src: "/assets/img_7.jpg", alt: "Image 7" },
];

Modal.setAppElement("#root");

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Reliable download
  const handleDownload = (imageSrc: string) => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = imageSrc.split("/").pop() || "image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Optional: close on Escape (react-modal already does this, but extra safety)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-white">
        Gallery
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md"
            onClick={() => openModal(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Modal
        isOpen={!!selectedImage}
        onRequestClose={closeModal}
        contentLabel="Image Lightbox"
        className="outline-none"
        overlayClassName="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <div className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center">
          {/* Main Image */}
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Full screen view"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          )}

          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute -top-2 -right-2 md:top-4 md:right-4 w-10 h-10 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-full text-2xl font-bold shadow-lg transition-colors z-10"
            aria-label="Close"
          >
            ×
          </button>

          {/* Download Button */}
          <button
            onClick={() => selectedImage && handleDownload(selectedImage)}
            className="absolute bottom-4 right-4 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-lg transition-colors z-10"
          >
            Download
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
