import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      {/* Hamburger button to toggle the menu */}
      <button
        className="text-white block md:hidden"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out bg-zinc-500 border-blue-500 z-50 w-2/3 max-w-xs h-auto shadow-lg py-4 rounded-l-lg`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-white text-lg font-bold">Menu</h2>

          {/* Stylish close button */}
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 focus:outline-none"
            aria-label="Close Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <nav className="p-4 space-y-4">
          <Link
            to="/"
            className="block text-white hover:text-gray-300"
            onClick={closeMenu}
          >
            Home
          </Link>

          {/* About section */}
          <Link
            to="/about"
            className="block text-white hover:text-gray-300"
            onClick={closeMenu}
          >
            About
          </Link>

          {/* Support Us section */}
          <Link
            to="/support"
            className="block text-white hover:text-gray-300"
            onClick={closeMenu}
          >
            Support Us
          </Link>

          <Link
            to="/gallery"
            className="block text-white hover:text-gray-300"
            onClick={closeMenu}
          >
            Gallery
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
