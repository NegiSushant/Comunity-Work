import React from "react";
import { Calendar } from "lucide-react";
// import FuturePastEvent from "./FuturePastEvent";

const OrganizingEvents: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Hero */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-16 md:py-20 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 mb-6">
            <Calendar className="w-8 h-8 text-orange-600 dark:text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Organizing Events
          </h1>
          <p className="text-xl text-orange-600 dark:text-orange-400 font-medium max-w-2xl mx-auto">
            Upcoming celebrations and past gatherings at Maa Kalinka Mandir
          </p>
        </div>
      </section>

      {/*Event Section */}
      {/* <FuturePastEvent /> */}
    </div>
  );
};

export default OrganizingEvents;
