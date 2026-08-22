import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-[70vh] min-h-[480px] md:h-[85vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/img_7.jpg')" }} // ← put image in public/assets/
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Welcome to Maa Kalinka Mandir
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-orange-100 font-medium">
          A holy place for spiritual awakening
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

// import React from "react";

// const HeroSection: React.FC = () => {
//   return (
//     <section
//       className="bg-cover bg-center h-screen flex items-center justify-center text-white"

//       style={{ backgroundImage: "url('src/assets/img_7.jpg')" }}
//     >
//       <div className="text-center">
//         <h2 className="text-5xl font-bold">Welcome to Maa Kalinka Mandir</h2>
//         <p className="mt-4 text-lg">A holy place for spiritual awakening</p>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
