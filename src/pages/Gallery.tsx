import React, { useState } from "react";
import Modal from "react-modal";

// Sample images array
const images = [
  { id: 1, src: "src/assets/img1.jpg", alt: "Image 1" },
  { id: 2, src: "src/assets/img_2.jpg", alt: "Image 2" },
  { id: 3, src: "src/assets/img_3.jpg", alt: "Image 3" },
  { id: 4, src: "src/assets/img_4.jpg", alt: "Image 4" },
  { id: 5, src: "src/assets/img_5.jpg", alt: "Image 5" },
  { id: 6, src: "src/assets/img_6.jpg", alt: "Image 6" },
  { id: 7, src: "src/assets/img_7.jpg", alt: "Image 7" },
];

Modal.setAppElement("#root"); // To prevent screen readers from reading background content

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Open the modal with the selected image
  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Handle image download
  const handleDownload = (imageSrc: string) => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = imageSrc.substring(imageSrc.lastIndexOf("/") + 1);
    link.click();
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center text-4xl font-bold mb-8">Gallery</h1>
      {/* Image grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative cursor-pointer"
            onClick={() => openModal(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover rounded-lg hover:opacity-75 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>

      {/* Full-screen Modal */}
      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onRequestClose={closeModal}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          overlayClassName="fixed inset-0 bg-black bg-opacity-75"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Full-screen Image */}
            <img
              src={selectedImage}
              alt="Full-screen image"
              className="max-w-screen max-h-screen object-contain" // Image scaling fixed
            />

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 rounded-full p-3 text-lg"
            >
              &times; {/* Close (X) symbol */}
            </button>

            {/* Download Button */}
            <button
              onClick={() => handleDownload(selectedImage)}
              className="absolute bottom-4 right-4 text-white bg-blue-600 hover:bg-blue-700 rounded-full p-3 text-lg"
            >
              Download
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Gallery;
