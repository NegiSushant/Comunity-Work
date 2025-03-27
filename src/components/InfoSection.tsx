import React, { useRef, useEffect, useState } from "react";

interface InfoSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  reverse?: boolean; // Prop to reverse image and text position
}

const InfoSection: React.FC<InfoSectionProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  reverse,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [textHeight, setTextHeight] = useState<number | null>(null);

  useEffect(() => {
    // Calculate and update the text container's height
    if (textRef.current) {
      setTextHeight(textRef.current.offsetHeight);
    }
  }, [description]);

  return (
    <div className="container mx-auto py-12 px-4">
      <div
        className={`flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center lg:items-start lg:space-x-8`}
      >
        {/* Image Section */}
        <div
          className="lg:w-1/2 w-full mb-6 lg:mb-0 flex justify-center items-center"
          style={{
            height: textHeight ? `${textHeight}px` : "auto", // Match image height with text height
          }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-contain rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Description Section */}
        <div ref={textRef} className="lg:w-1/2 w-full text-left">
          <h2 className="text-4xl font-bold mb-6">{title}</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
