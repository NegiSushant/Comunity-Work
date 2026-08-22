import React from "react";
import { Users, Heart, Calendar, Home, Sparkles } from "lucide-react";

const AboutCommunity: React.FC = () => {
  const responsibilities = [
    {
      icon: <Home className="w-8 h-8 text-orange-500" />,
      title: "Temple Care & Maintenance",
      description:
        "The community regularly cleans, repairs, and maintains the temple premises, ensuring that Maa Kalinka Mandir remains a pure and welcoming place for all devotees.",
    },
    {
      icon: <Calendar className="w-8 h-8 text-orange-500" />,
      title: "Organizing Annual Events",
      description:
        "Every year, the villagers come together to organize grand celebrations in the temple courtyard, especially during Navratri and other important festivals.",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Village Welfare",
      description:
        "Beyond the temple, the community works for the overall well-being of Ranjeet Moxan — helping with paths, water sources, and supporting families in need.",
    },
    {
      icon: <Heart className="w-8 h-8 text-orange-500" />,
      title: "Preserving Traditions",
      description:
        "Through collective effort, the community keeps Garhwali culture, folk songs, rituals, and values alive for the next generation.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-16 md:py-24 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 mb-6">
            <Users className="w-8 h-8 text-orange-600 dark:text-orange-400" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Our Community
          </h1>

          <p className="text-xl text-orange-600 dark:text-orange-400 font-medium mb-6">
            The Heart of Ranjeet Moxan
          </p>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            The village community of Ranjeet Moxan is the true strength behind
            Maa Kalinka Mandir. United by faith and a deep sense of belonging,
            the people of this village work together to protect their temple,
            care for their land, and keep their traditions alive.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 md:p-10 border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              A Community Bound by Faith
            </h2>
            <div className="space-y-5 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              <p>
                In the quiet hills of Pauri Garhwal, the people of Ranjeet Moxan
                share a special bond — not just with each other, but with Maa
                Kalinka and the sacred land they call home. For generations,
                this community has taken collective responsibility for the
                temple and the village.
              </p>
              <p>
                Whether it is repairing the temple courtyard, preparing for
                festivals, or helping a neighbor in need, the villagers come
                together with open hearts. Their unity turns every celebration
                into a memorable event and every challenge into a shared
                journey.
              </p>
            </div>
          </div>
        </section>

        {/* Responsibilities Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            How the Community Serves
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {responsibilities.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-7 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Annual Events Highlight */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/40 dark:to-orange-900/20 rounded-2xl p-8 md:p-10 border border-orange-200 dark:border-orange-800/50">
            <div className="flex items-center gap-3 mb-5">
              <Sparkles className="w-7 h-7 text-orange-600 dark:text-orange-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Temple Courtyard Celebrations
              </h2>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5 text-justify">
              Every year, the temple courtyard of Maa Kalinka Mandir comes alive
              with devotion and joy. The entire community participates in
              organizing these sacred events — from decorating the temple and
              arranging langar (community kitchen) to performing traditional
              Garhwali songs and rituals.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              During Navratri and other special occasions, villagers from nearby
              areas also join, turning the courtyard into a vibrant space of
              faith, music, and togetherness. These gatherings strengthen the
              spiritual and social fabric of Ranjeet Moxan.
            </p>
          </div>
        </section>

        {/* Closing Message */}
        <section className="text-center">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 md:p-10 border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Together We Stand
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The strength of Ranjeet Moxan lies in its people. Through selfless
              service, mutual respect, and unwavering faith in Maa Kalinka, the
              community continues to protect its heritage and inspire future
              generations.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutCommunity;
