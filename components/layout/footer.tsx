'use client';

import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#FDBE58] text-black pt-12 pb-6 px-4 md:px-20">
  
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 md:gap-6 border-b border-black pb-6">
        <div className="md:w-1/2 text-center">
          <h2 className="text-xl font-bold mb-2">Travel</h2>
          <p className="mb-4 text-sm">
            Travel Tourism is a customer-oriented organization offering professional,<br />
            world-class tourism solutions.
          </p>
          <h3 className="font-bold mb-2">Services</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
             <a href="#home" className="text-black hover:scale-110">Home</a>
          <a href="#services" className="text-black hover:scale-110 ">Services</a>
          <a href="#destinations" className="text-black hover:scale-110">Destinations</a>
          <a href="#rentals" className="text-black hover:scale-110">Car Rentals</a>
          </div>
        </div>

        <div className="md:w-1/2 text-center">
          <h3 className="text-lg font-bold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 justify-center">
              <FaMapMarkerAlt /> Varanasi, India
            </li>
            <li className="flex items-center justify-center gap-1">
               📞<a href="tel:7800664900" style={{ color: 'black', textDecoration: 'none', fontWeight: 'semibold' }}>+91 7800664900</a>
            </li>
            <li className="flex items-center gap-2 justify-center">
              <FaEnvelope /> XYZ@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-4 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-sm pt-4">
        <div className="font-semibold text-center">WORLDVIEW</div>

        <div className="text-center">
          © 2025 Varanasi Tempo Traveller Rentals. All rights reserved.
        </div>

        <div className="flex gap-4 text-xl justify-center">
          <a href="https://www.instagram.com/worldvt.vns/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="cursor-pointer hover:scale-110 transition" />
          </a>
          <FaFacebook className="cursor-pointer hover:scale-110 transition" />
          <FaTwitter className="cursor-pointer hover:scale-110 transition" />
        </div>
      </div>
    </footer>
  );
}