"use client";
// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4"> 
          <div className="flex items-center">
            <Link href="/">
              <span className="text-white text-xl font-bold">Amazing Navbar</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-white" onClick={toggleMenu}>
              {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <span className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">{children}</span>
    </Link>
  );
};

export default Navbar;
