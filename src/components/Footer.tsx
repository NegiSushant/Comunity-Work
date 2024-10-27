import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Temple Address */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Kalinka Maa Temple</h3>
              <p>Vill.:- Ranjeet Moxan, P.O.:- Uniyal Moxan</p>
              <p>Nainidanda, Dhoomakot</p>
              <p>Pauri Garhwal, Uttrakhand, 246161</p>
              {/* <p>Phone: +91 123 456 7890</p> */}
            </div>

            {/* Map Section */}
            <div className="w-full h-48 mt-4">
              {/* Embedded Google Maps iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14279.548205669228!2d79.0200149!3d29.6545502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a1fba610b77e5%3A0x478dfe736948d772!2sJAI%20MAA%20KALINKA%20MANDIR!5e0!3m2!1sen!2sin!4v1696327498679!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Temple Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <form className="space-y-4">
              <input
                type="text"
                className="w-full p-2 text-black rounded"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="w-full p-2 text-black rounded"
                placeholder="Your Email"
              />
              <textarea
                className="w-full p-2 text-black rounded"
                placeholder="Your Message"
                rows={3}
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:underline">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/support" className="hover:underline">
                  Support Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} KalinkaMaaTemple. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
