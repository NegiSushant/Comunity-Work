import React from "react";
import { Heart, Users, HandHeart } from "lucide-react";
// import SupportWithFunds from "@/components/SupportWithFunds";

const SupportCommunity: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Hero */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-16 md:py-20 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 mb-6">
            <HandHeart className="w-8 h-8 text-orange-600 dark:text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Support Our Community
          </h1>
          <p className="text-xl text-orange-600 dark:text-orange-400 font-medium max-w-2xl mx-auto">
            Your contribution helps us protect our temple, preserve traditions,
            and strengthen village life.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-5xl space-y-10">
        {/* Who We Are */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 p-8">
          <div className="flex items-center gap-3 mb-5">
            <Users className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Who We Are
            </h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            We are the people of Ranjeet Moxan — a close-knit community bound by
            faith in Maa Kalinka and a deep love for our village. Together we
            maintain the temple, organize festivals, and work for the well-being
            of every family in our hills.
          </p>
        </section>

        {/* Why Support */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 p-8">
          <div className="flex items-center gap-3 mb-5">
            <Heart className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Why We Need Your Support
            </h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4">
            Maintaining the temple premises, organizing annual events in the
            courtyard, and supporting village development requires continuous
            effort and resources. Your contribution — big or small — directly
            helps us:
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">▹</span>
              Keep the temple clean, safe, and welcoming for devotees
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">▹</span>
              Organize Navratri and other festivals with dignity
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">▹</span>
              Support community welfare and small development works
            </li>
          </ul>
        </section>

        {/* Supporters Table */}
        {/* <SupportWithFunds /> */}
      </div>
    </div>
  );
};

export default SupportCommunity;
