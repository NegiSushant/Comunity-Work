import React from "react";
import HeroSection from "../components/HeroSection";
import Carousel from "../components/Carousel";
import InfoSection from "../components/InfoSection";

const Home: React.FC = () => {
  const images = [
    "src/assets/img1.jpg",
    "src/assets/img_2.jpg",
    "src/assets/img_3.jpg",
    "src/assets/img_4.jpg",
    "src/assets/img_5.jpg",
    "src/assets/img_6.jpg",
  ];
  return (
    <div>
      <div>
        <section className="py-2.5">
          <Carousel images={images} />
        </section>
      </div>
      <HeroSection />
      <section className="p-8">
        <InfoSection
          imageSrc="src/assets/img_2.jpg"
          imageAlt="Sample Image"
          title="Jai Maa Bungi Devi"
          description="The Gorakhnath Temple, a center of spiritual and religious significance, stands as a beacon of devotion and culture. With centuries of history, it offers an enriching experience to all who visit, symbolizing the deep connection between tradition and spirituality."
        />
        <InfoSection
          imageSrc="src/assets/img_3.jpg"
          imageAlt="Sample Image 2"
          title="Jai Kalinka Maa"
          description="Our mission is to provide a spiritual haven for devotees from all walks of life, offering guidance, solace, and a sense of belonging. We are dedicated to preserving our rich cultural heritage and passing it on to future generations."
          reverse // Reverse the image and description positions for this section
        />
        <InfoSection
          imageSrc="src/assets/img_3.jpg"
          imageAlt="Sample Image 2"
          title="Jai Bhumiya Devta"
          description="Our mission is to provide a spiritual haven for devotees from all walks of life, offering guidance, solace, and a sense of belonging. We are dedicated to preserving our rich cultural heritage and passing it on to future generations."
        />
        <InfoSection
          imageSrc="src/assets/img_3.jpg"
          imageAlt="Sample Image 2"
          title="Ranjeet Moxan"
          description="Our mission is to provide a spiritual haven for devotees from all walks of life, offering guidance, solace, and a sense of belonging. We are dedicated to preserving our rich cultural heritage and passing it on to future generations."
          reverse // Reverse the image and description positions for this section
        />
      </section>
    </div>
  );
};

export default Home;
