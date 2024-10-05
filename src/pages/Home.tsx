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
          imageSrc="src/assets/bungidevi.jpg"
          imageAlt="Sample Image"
          title="Jai Maa Bungi Devi"
          description="Bungi mata Temple is approximately 90 km from Kotdwara, 100 km from Ramnagar   The temple is situated at the top of a hill .The presiding deity of the temple is ma durga.The holy shrine of bungi mata temple is a very popular pilgrimage among the Garhwali people. People who lives in villages they have sacred belief in Bungi mata Temple."
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
