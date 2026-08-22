import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import DropdownMenu from "./DropDown";
import ThemeToggle from "./ui/ThemeToggle";

const Header: React.FC = () => {
  // null | "about" | "support"
  const [openMenu, setOpenMenu] = useState<"about" | "support" | null>(null);

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
    <header className="sticky top-0 z-50 bg-orange-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold tracking-wide">
          <Link to="/" className="hover:text-orange-100 transition-colors">
            Jai Mata Di
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link
            to="/"
            className="font-medium hover:text-orange-100 transition-colors"
          >
            Home
          </Link>

          <DropdownMenu
            title="About"
            items={aboutItems}
            isOpen={openMenu === "about"}
            onOpen={() => setOpenMenu("about")}
            onClose={() => setOpenMenu(null)}
          />

          <DropdownMenu
            title="Support"
            items={supportItems}
            isOpen={openMenu === "support"}
            onOpen={() => setOpenMenu("support")}
            onClose={() => setOpenMenu(null)}
          />

          <Link
            to="/gallery"
            className="font-medium hover:text-orange-100 transition-colors"
          >
            Gallery
          </Link>

          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <SideMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
