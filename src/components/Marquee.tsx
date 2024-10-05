import React from 'react';

const Marquee: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-500 to-blue-500 py-3 shadow-lg">
      <div className="flex animate-marquee items-center space-x-12 text-white text-2xl font-semibold whitespace-nowrap">
        <span className="mx-4 text-lg font-bold shadow-md">Jai Maa Bungi Devi</span>
        <span className="mx-4 text-lg font-bold shadow-md">Jai Bhumiya Devta</span>
        <span className="mx-4 text-lg font-bold shadow-md">Jai Kalinka Maa</span>
        <span className="mx-4 text-lg font-bold shadow-md">Jai Shidh Baba</span>
        {/* Repeating the text to avoid gaps */}
        <span className="mx-4 text-lg font-bold shadow-md">Jai Maa Bungi Devi</span>
        <span className="mx-4 text-lg font-bold shadow-md">Jai Bhumiya Devta</span>
        <span className="mx-4 text-lg font-bold shadow-md">Jai Kalinka Maa</span>
        <span className="mx-4 text-lg font-bold shadow-md">Jai Shidh Baba</span>
      </div>
    </div>
  );
};

export default Marquee;
