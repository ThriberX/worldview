'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/20 border-b border-white/30">
      <div className="relative max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        
        {/* Logo */}
        <div className="md:ml-0 ml-4"> 
          <Image
            src="/images/logo.png"
            alt="WorldView Logo"
            width={60} 
            height={28}
            className="object-contain"
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-6">
          <a href="#" className="text-black hover:text-yellow-300 transition">Home</a>
          <a href="#" className="text-black hover:text-yellow-300 transition">Car Rentals</a>
          <a href="#" className="text-black hover:text-yellow-300 transition">Destinations</a>
          <a href="#" className="text-black hover:text-yellow-300 transition">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white/10 backdrop-blur-sm">
          <a href="#" className="block text-black py-2">Home</a>
          <a href="#" className="block text-black py-2">Car Rentals</a>
          <a href="#" className="block text-black py-2">Destinations</a>
          <a href="#" className="block text-black py-2">Contact</a>
        </div>
      )}
    </nav>
  );
}
