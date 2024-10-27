import React from "react";
import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import DropdownMenu from "./DropDown";

const Header: React.FC = () => {
  const aboutItems = [
    { label: "About Community", path: "/about/community" },
    { label: "About Pandit Ji", path: "/about/panditji" },
    { label: "About Village", path: "/about/village" },
    { label: "About Developer", path: "/about/developer" },
  ];

  const supportItems = [
    { label: "Support Community", path: "/support/community" },
    { label: "Organizing Events", path: "/support/events" },
    { label: "Support Developer", path: "/support/developer" },
  ];

  return (
    <header className="bg-orange-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Jai Mata Di</Link>
        </div>

        {/* Hamburger Menu (Side Menu for small screens) */}
        <SideMenu  />

        {/* Navbar for larger screens */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>

          {/* About Dropdown */}
          <DropdownMenu title="About" items={aboutItems} />

          {/* Support Us Dropdown */}
          <DropdownMenu title="Support" items={supportItems} />

          <Link to="/gallery" className="hover:text-gray-300">
            Gallery
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
