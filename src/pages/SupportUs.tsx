import React from "react";
import { Link } from "react-router-dom";

const SupportUs: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row container mx-auto p-4 gap-8">
      {/* Left Sidebar for Support Us Links */}
      <div className="w-full md:w-1/3 bg-green-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          Support Us
        </h2>
        <ul className="space-y-4 text-green-700 font-medium">
          <li>
            <Link to="/support/community" className="hover:text-green-500">
              Support Community
            </Link>
          </li>
          <li>
            <Link to="/support/events" className="hover:text-green-500">
              Organizing Events
            </Link>
          </li>
          <li>
            <Link to="/support/developer" className="hover:text-green-500">
              Support Developer
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Content Section for Who We Are and Why We Need Support */}
      <div className="w-full md:w-2/3 space-y-8">
        {/* Who We Are Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            We are a dedicated team committed to preserving and promoting our
            heritage, values, and traditions. Our goal is to create a positive
            impact within our community by fostering a deep sense of unity and
            belonging.
          </p>
        </section>

        {/* Why We Need Your Support Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why We Need Your Support
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Your support helps us maintain and develop our community
            initiatives, ensuring that our rich traditions and values are
            preserved for future generations. We rely on community support to
            sustain our activities and to reach more people who can benefit from
            our work.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SupportUs;
