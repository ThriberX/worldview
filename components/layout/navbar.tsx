'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/20 border-b border-white/30">
      <div className="relative max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        
        <div className="md:ml-0 ml-4"> 
          <Image
            src="/images/logo.png"
            alt="WorldView Logo"
            width={60} 
            height={28}
            className="object-contain"
          />
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-6">
          <a href="#home" className="text-black text-shadow-md font-medium tracking-wide transition duration-300 ease-in-out hover:text-yellow-500 hover:scale-110 hover:drop-shadow-md">Home</a>
          <a href="#services" className="text-black text-shadow-md font-medium tracking-wide transition duration-300 ease-in-out hover:text-yellow-500 hover:scale-110 hover:drop-shadow-md">Services</a>
          <a href="#destinations" className="text-black text-shadow-md font-medium tracking-wide transition duration-300 ease-in-out hover:text-yellow-500 hover:scale-110 hover:drop-shadow-md">Destinations</a>
          <a href="#rentals" className="text-black text-shadow-md font-medium tracking-wide transition duration-300 ease-in-out hover:text-yellow-500 hover:scale-110 hover:drop-shadow-md">Car Rentals</a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white/10 backdrop-blur-sm">
          <a href="#home" className="block text-black py-2 text-shadow-md font-medium tracking-wide transition duration-300 ease-in-out hover:text-yellow-500 hover:drop-shadow-md">Home</a>
          <a href="#services" className="block text-black py-2 text-shadow-md font-medium tracking-wide transition duration-300 ease-in-out hover:text-yellow-500 hover:drop-shadow-md">Services</a>
          <a href="#destinations" className="block text-black py-2 text-shadow-md font-medium tracking-wide transition duration-300 ease-in-out hover:text-yellow-500 hover:drop-shadow-md">Destinations</a>
          <a href="#rentals" className="block text-black py-2 text-shadow-md font-medium tracking-wide transition duration-300 ease-in-out hover:text-yellow-500 hover:drop-shadow-md">Car Rentals</a>
        </div>
      )}
    </nav>
  );
}