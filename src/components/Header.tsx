import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-orange-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Jai Kalinka Maa</h1>
        <nav>
          <ul className="flex space-x-4 font-serif">
            <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
            <li><Link to="/gallery" className="hover:text-gray-200">Gallery</Link></li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
