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
      <section className="py-2.5">
        <Carousel images={images} />
      </section>
      <HeroSection />
      <section className="p-8 space-y-8">
        <InfoSection
          imageSrc="src/assets/bungidevi.jpg"
          imageAlt="Sample Image"
          title="Jai Maa Bungi Devi"
          description="Bungi Mata Temple, dedicated to Maa Bungi, is a revered hilltop shrine approximately 90 km from Kotdwara and 100 km from Ramnagar. 
          Nestled amidst the lush Garhwal hills, this temple holds deep spiritual significance for the local Garhwali communities. 
          Pilgrims and locals alike visit the temple, not only for its serene beauty but also for the profound sense of peace and protection they believe Maa Durga offers.
          The journey to Bungi Mata Temple takes devotees through breathtaking mountain trails, adding a sense of reverence to the pilgrimage. 
          Villagers from nearby areas, with deep-rooted faith in Maa Bungi, frequently undertake this journey, bringing offerings of flowers and 
          incense to seek the goddess's blessings. Stories of miracles and blessings attributed to Maa Bungi are woven into the local folklore, 
          reinforcing the sacred bond between the deity and her devotees.
          During Navratri, the temple becomes a hub of devotion and celebration, with Garhwali songs and rituals performed by pilgrims who gather 
          in large numbers. This annual festival highlights the cultural richness of the region and the temple’s central role in community life, 
          symbolizing resilience, faith, and a profound connection to tradition and the divine."
        />
        <InfoSection
          imageSrc="src/assets/img_3.jpg"
          imageAlt="Sample Image 2"
          title="Jai Kalinka Maa"
          description="The Maa Kali Temple, located in Ranjeet Moxan, is a revered shrine dedicated to the Hindu goddess Maa Kali. 
          Situated just 5 to 10 kilometers from Nainidanda and Haldukhal, this temple stands as a spiritual beacon within the region, 
          attracting devotees from nearby villages and beyond. The temple’s position as part of the village’s bhumiya signifies its role in 
          local tradition as the divine protector of the village, believed to safeguard residents and bless them with peace and prosperity.
          Known as the village guardian, Maa Kali’s shrine is cherished by locals who honor her as their protector against negative forces and hardships. 
          Pilgrims visiting the temple engage in traditional offerings and prayers, invoking her fierce yet benevolent spirit to shield the community. 
          The temple’s proximity to Nainidanda and Haldukhal makes it an accessible pilgrimage, and the scenic beauty of the Garhwal hills adds to the temple’s mystical charm.
          
          Maa Kali’s devotees gather at the temple during special festivals and rituals, filling the air with chants, incense, and offerings of flowers. 
          The surrounding natural beauty enhances the tranquility of the location, making it not only a place of devotion but also a peaceful retreat."
          reverse // Reverse the image and description positions for this section
        />
        <InfoSection
          imageSrc="src/assets/img_3.jpg"
          imageAlt="Sample Image 2"
          title="Jai Bhumiya Devta"
          description="The Bhumiya Devta, revered as the protector of the village, has been a sacred site since the village's establishment. 
          Each year, villagers gather to perform pooja and worship, demonstrating their deep-rooted devotion to their guardian deity. 
          During various rituals, the community comes together to honor the bhumiya, reflecting the collective belief in the Bhumiya Devta protective presence. 
          This shared reverence fosters a strong sense of unity and cultural identity among the villagers, linking their traditions with spiritual faith."
        />
        <InfoSection
          imageSrc="src/assets/img_3.jpg"
          imageAlt="Sample Image 2"
          title="Ranjeet Moxan"
          description="Ranjeet Moxan is a picturesque village nestled in the rural heart of Pauri Garhwal, Uttarakhand, 
          within the serene Garhwal region of the Shivalik Himalayas. Located approximately 85 to 90 kilometers from the bustling 
          cities of Kotdwar, Pauri Garhwal, and Ramnagar, Nainital, this charming village is accessible via a rural road that connects 
          it to nearby local markets, including Nainidanda and Haldukhal. 
          
          Perched atop a mountain peak, Ranjeet Moxan offers breathtaking views of the surrounding lush green hills and 
          towering mountains, making it a perfect retreat for nature lovers. The village's remote location provides a sense 
          of tranquility and isolation, allowing residents and visitors alike to experience the unspoiled beauty of the Himalayas. 
          The vibrant culture of the village is deeply intertwined with its natural surroundings, and the local community engages in 
          various traditional practices, celebrating their heritage and connection to the land. With its stunning landscapes, 
          rich cultural traditions, and spiritual significance, Ranjeet Moxan embodies the essence of rural life in Uttarakhand, 
          inviting those who seek solace in nature's embrace."
          reverse // Reverse the image and description positions for this section
        />
      </section>
    </div>
  );
};

export default Home;
