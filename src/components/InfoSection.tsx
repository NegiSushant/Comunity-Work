import React from "react";

interface InfoSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  reverse = false,
}) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col gap-8 lg:gap-12 ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center`}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-900 dark:text-white">
              {title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed text-justify">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;