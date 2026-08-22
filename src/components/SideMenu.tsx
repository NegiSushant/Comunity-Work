import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const SideMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setOpenSection(null);
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const aboutItems = [
    { label: "About Community", path: "/about/community" },
    // { label: "About Pandit Ji", path: "/about/panditji" },
    { label: "About Village", path: "/about/village" },
    { label: "About Developer", path: "/about/developer" },
  ];

  const supportItems = [
    { label: "Support Community", path: "/support/community" },
    { label: "Organizing Events", path: "/support/events" },
    { label: "Support Developer", path: "/support/developer" },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-lg hover:bg-orange-700/40 transition-colors md:hidden"
        aria-label="Open menu"
      >
        <Menu className="w-7 h-7 text-white" />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-700">
          <span className="text-lg font-bold text-orange-600 dark:text-orange-400">
            Menu
          </span>
          <button
            onClick={closeMenu}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="px-3 py-4 space-y-1">
          {/* Home */}
          <Link
            to="/"
            onClick={closeMenu}
            className="block px-4 py-3 rounded-lg text-gray-800 dark:text-gray-200 font-medium hover:bg-orange-50 dark:hover:bg-gray-800"
          >
            Home
          </Link>

          {/* About Accordion */}
          <div>
            <button
              onClick={() => toggleSection("about")}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-800 dark:text-gray-200 font-medium hover:bg-orange-50 dark:hover:bg-gray-800"
            >
              <span>About</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openSection === "about" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openSection === "about" && (
              <div className="ml-4 mt-1 space-y-1 border-l-2 border-orange-200 dark:border-orange-800 pl-3">
                {aboutItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className="block px-3 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 rounded-md"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Support Accordion */}
          <div>
            <button
              onClick={() => toggleSection("support")}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-800 dark:text-gray-200 font-medium hover:bg-orange-50 dark:hover:bg-gray-800"
            >
              <span>Support</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openSection === "support" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openSection === "support" && (
              <div className="ml-4 mt-1 space-y-1 border-l-2 border-orange-200 dark:border-orange-800 pl-3">
                {supportItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className="block px-3 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 rounded-md"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Gallery */}
          <Link
            to="/gallery"
            onClick={closeMenu}
            className="block px-4 py-3 rounded-lg text-gray-800 dark:text-gray-200 font-medium hover:bg-orange-50 dark:hover:bg-gray-800"
          >
            Gallery
          </Link>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
