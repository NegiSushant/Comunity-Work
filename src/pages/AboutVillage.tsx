import React from "react";
import {
  MapPin,
  Users,
  Landmark,
  User,
  Image as ImageIcon,
} from "lucide-react";

const AboutVillage: React.FC = () => {
  const gramPanchayatVillages = [
    "Ranjeet Moxan",
    "Dholpani",
    "Tandiyu",
    "Mangeri Mali",
    "Mangeri Talir",
  ];

  //   const previousPradhans = [
  //     { name: "Smt. Soniya Devi", period: "2019 – 2025" },
  //     { name: "Shri Raje Singh", period: "2014 – 2019" },
  //     { name: "Smt. Kalavati Devi", period: "2009 – 2014" },
  //     // { name: "Smt. __________", period: "20XX – 20XX" },
  //   ];

  const villageImages = [
    "/assets/IMG-20220227-WA0007.jpg",
    "/assets/IMG-20220227-WA0017.jpg",
    "/assets/IMG-20230214-WA0006.jpg",
    "/assets/IMG-20230214-WA0007.jpg",
    "/assets/IMG-20230214-WA0008.jpg",
    "/assets/IMG-20230214-WA0009.jpg",
    "/assets/IMG-20230214-WA0010.jpg",
    "/assets/IMG-20230214-WA0011.jpg",
    "/assets/IMG20211020100314.jpg",
    "/assets/IMG20211020100319.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-16 md:py-24 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 mb-6">
            <MapPin className="w-8 h-8 text-orange-600 dark:text-orange-400" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Ranjeet Moxan
          </h1>
          <p className="text-xl text-orange-600 dark:text-orange-400 font-medium">
            A Beautiful Village in the Hills of Pauri Garhwal
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-5xl space-y-16">
        {/* 1. Geography & Location */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-7 h-7 text-orange-500" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Geography & Location
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 border border-gray-100 dark:border-gray-800">
            <div className="space-y-5 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              <p>
                Ranjeet Moxan is a picturesque village nestled in the serene
                hills of
                <strong> Pauri Garhwal</strong> district in Uttarakhand. It is
                located approximately <strong>85–90 km</strong> from Kotdwar and
                Ramnagar, and about <strong>5–10 km</strong> from Nainidanda and
                Haldukhal.
              </p>
              <p>
                The village sits at a moderate altitude in the Shivalik
                Himalayan range, surrounded by lush green forests, terraced
                fields, and panoramic mountain views. The climate is pleasant
                for most of the year, with cool summers and cold winters.
              </p>
              <p>
                <strong>Postal Address:</strong>
                <br />
                Vill. Ranjeet Moxan, P.O. Uniyal Moxan
                <br />
                Nainidanda, Dhoomakot, Pauri Garhwal
                <br />
                Uttarakhand – 246161
              </p>
            </div>
          </div>
        </section>

        {/* 2. Demography */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-7 h-7 text-orange-500" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Village Demography
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 border border-gray-100 dark:border-gray-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-5 bg-orange-50 dark:bg-orange-950/30 rounded-xl">
                <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                  ~250
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Total Population
                </p>
              </div>
              <div className="text-center p-5 bg-orange-50 dark:bg-orange-950/30 rounded-xl">
                <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                  ~25
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Households
                </p>
              </div>
              <div className="text-center p-5 bg-orange-50 dark:bg-orange-950/30 rounded-xl">
                <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                  Garhwali
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Main Language
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              All the population belongs to the Garhwali community.
              Most families are engaged in agriculture, horticulture, and animal
              husbandry. In recent years, many young people have also moved to
              cities for education and employment while maintaining strong ties
              with their native village.
            </p>
          </div>
        </section>

        {/* 3. Gram Panchayat */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Landmark className="w-7 h-7 text-orange-500" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Gram Panchayat
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 border border-gray-100 dark:border-gray-800">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-justify">
              Ranjeet Moxan comes under the{" "}
              <strong>Uniyal Moxan Gram Panchayat</strong>
              (or update with the correct name). The Gram Panchayat is
              responsible for local governance, development works, and welfare
              schemes in the following villages:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {gramPanchayatVillages.map((village, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-lg"
                >
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">
                    {village}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Village Pradhan */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <User className="w-7 h-7 text-orange-500" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Village Pradhan
            </h2>
          </div>

          <div className="space-y-6">
            {/* Current Pradhan */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/40 dark:to-orange-900/20 rounded-2xl p-8 border border-orange-200 dark:border-orange-800/40">
              <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-2">
                Current Pradhan
              </p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                Shri Bharat Singh Bisht
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tenure: 2025 – Present
              </p>
              <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                Brief introduction about the current Pradhan can be added here.
              </p>
            </div>

            {/* Previous Pradhans */}
            {/* <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">
                Previous Pradhans
              </h3>
              <div className="space-y-4">
                {previousPradhans.map((pradhan, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 dark:border-gray-800 last:border-0"
                  >
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {pradhan.name}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 sm:mt-0">
                      {pradhan.period}
                    </span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </section>

        {/* 5. Village Images Gallery */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <ImageIcon className="w-7 h-7 text-orange-500" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Village Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {villageImages.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-md bg-gray-200 dark:bg-gray-800 aspect-[4/3]"
              >
                <img
                  src={src}
                  alt={`Ranjeet Moxan village view ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutVillage;
