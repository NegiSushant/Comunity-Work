import React, { useEffect, useState } from "react";

const DevelopmentNotice: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Close the notice after a few seconds or on user interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Automatically close after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null; // Don't render if not visible

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center space-y-4">
        <h2 className="text-2xl font-bold text-red-600">
          We are under development
        </h2>
        <p className="text-gray-700">
          Our website is currently under development. Stay tuned for updates!
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DevelopmentNotice;
