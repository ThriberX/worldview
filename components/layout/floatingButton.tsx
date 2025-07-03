'use client';

import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a
        href="https://wa.me/+917800664900"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-xl" />
      </a>

      <a
        href="tel:+917800664900"
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
        aria-label="Call"
      >
        <FaPhone className="text-xl" />
      </a>
    </div>
  );
}
