import React from "react";

const Marquee: React.FC = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600 py-2.5 shadow-md">
      <div className="flex animate-marquee items-center space-x-12 whitespace-nowrap text-white">
        {/* First set */}
        <span className="mx-4 text-base md:text-lg font-bold">
          Jai Maa Bungi Devi
        </span>
        <span className="mx-4 text-base md:text-lg font-bold">
          Jai Bhumiya Devta
        </span>
        <span className="mx-4 text-base md:text-lg font-bold">
          Jai Kalinka Maa
        </span>
        <span className="mx-4 text-base md:text-lg font-bold">
          Jai Shidh Baba
        </span>

        {/* Duplicate set for seamless loop */}
        <span className="mx-4 text-base md:text-lg font-bold">
          Jai Maa Bungi Devi
        </span>
        <span className="mx-4 text-base md:text-lg font-bold">
          Jai Bhumiya Devta
        </span>
        <span className="mx-4 text-base md:text-lg font-bold">
          Jai Kalinka Maa
        </span>
        <span className="mx-4 text-base md:text-lg font-bold">
          Jai Shidh Baba
        </span>
      </div>
    </div>
  );
};

export default Marquee;
