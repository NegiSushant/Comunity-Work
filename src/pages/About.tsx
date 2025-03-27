import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row container mx-auto p-4 gap-8">
      {/* Left Sidebar for About Links */}
      <div className="w-full md:w-1/3 bg-blue-100 p-6 rounded-lg shadow-md sticky top-0 h-screen">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          About
        </h2>
        <ul className="space-y-4 text-blue-700 font-medium">
          <li>
            <Link to="/about/community" className="hover:text-blue-500">
              About Community 
            </Link>
          </li>
          <li>
            <Link to="/about/panditji" className="hover:text-blue-500">
              About Pandit Ji
            </Link>
          </li>
          <li>
            <Link to="/about/village" className="hover:text-blue-500">
              About Village
            </Link>
          </li>
          <li>
            <Link to="/about/developer" className="hover:text-blue-500">
              About Developer
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Content Section for About Us and Vision */}
      <div className="w-full md:w-2/3 space-y-8">
        {/* About Us Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            We are dedicated to preserving the heritage and traditions of our
            community. Our temple has been a cornerstone of spiritual and
            cultural activities, fostering a deep sense of belonging among
            members.
          </p>
        </section>

        {/* Our Vision Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            Our vision is to sustain and promote our cultural heritage, while
            also reaching out to the younger generation to ensure that our
            customs and values thrive for years to come. We believe in building
            a united community that upholds these principles and extends the
            spirit of kinship.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
