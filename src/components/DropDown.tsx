import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

interface DropdownMenuProps {
  title: string;
  items: { label: string; path: string }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <NavigationMenu ref={dropdownRef}>
      <NavigationMenuList className="space-x-6">
        {" "}
        {/* Added gap between items */}
        <NavigationMenuItem>
          {/* Trigger for the dropdown */}
          <NavigationMenuTrigger
            onMouseEnter={() => setIsDropdownOpen(true)}
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="text-white font-semibold hover:text-gray-300 transition-colors duration-200 bg-inherit m-0 p-0"
          >
            <Link to={`/${title.toLowerCase().replace(/\s+/g, "-")}`}>
              {title}
            </Link>
          </NavigationMenuTrigger>

          {/* Dropdown content */}
          {isDropdownOpen && (
            <NavigationMenuContent
              className="absolute left-0 mt-2 w-48 rounded-lg bg-white text-gray-800 shadow-lg border border-gray-200 z-10 transition-transform duration-300 ease-in-out transform translate-y-2"
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              {items.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="block text-balance px-6 py-2 hover:bg-orange-100 hover:text-orange-600 transition-all duration-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </NavigationMenuContent>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DropdownMenu;
