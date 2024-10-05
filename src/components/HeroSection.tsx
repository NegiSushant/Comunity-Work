import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center text-white"
      
      style={{ backgroundImage: "url('src/assets/img_7.jpg')" }}
    >
      <div className="text-center">
        <h2 className="text-5xl font-bold">Welcome to Maa Kalinka Mandir</h2>
        <p className="mt-4 text-lg">A holy place for spiritual awakening</p>
      </div>
    </section>
  );
};

export default HeroSection;
