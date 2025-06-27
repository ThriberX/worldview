'use client';

import React from 'react';
import { FaStar, FaClock, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';

export default function TopDestinations() {
  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Top Destinations</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white text-black rounded-2xl overflow-hidden shadow-md hover:scale-105 transition duration-300">
            <img src="/images/destination2.png" alt="Udaipur" className="w-full h-60 object-cover" />
            <div className="p-5 space-y-2">
              <div className="flex items-center gap-2 text-yellow-500 text-sm font-medium">
                <FaStar /> 4.0 (22) <span className="text-pink-500">😍</span>
              </div>
              <h3 className="text-lg font-semibold">Udaipur</h3>
              <p>
                <span className="text-red-600 font-bold">Rs. 12,000</span>{' '}
                <span className="text-gray-600">- Per person</span>
              </p>
              <div className="flex items-center text-sm text-gray-700 gap-4 mt-2">
                <span className="flex items-center gap-1"><FaClock /> 4 Day’s</span>
                <span className="flex items-center gap-1"><FaUsers /> 10+</span>
                <span className="flex items-center gap-1"><FaMapMarkerAlt /> India</span>
              </div>
            </div>
          </div>

          <div className="bg-white text-black rounded-2xl overflow-hidden shadow-md hover:scale-105 transition duration-300">
            <img src="/images/destination2.png" alt="Sun temple" className="w-full h-60 object-cover" />
            <div className="p-5 space-y-2">
              <div className="flex items-center gap-2 text-yellow-500 text-sm font-medium">
                <FaStar /> 4.7 (42) <span className="text-pink-500">😍</span>
              </div>
              <h3 className="text-lg font-semibold">Sun temple</h3>
              <p>
                <span className="text-red-600 font-bold">Rs. 19,000</span>{' '}
                <span className="text-gray-600">- Per person</span>
              </p>
              <div className="flex items-center text-sm text-gray-700 gap-4 mt-2">
                <span className="flex items-center gap-1"><FaClock /> 4 Day’s</span>
                <span className="flex items-center gap-1"><FaUsers /> 10+</span>
                <span className="flex items-center gap-1"><FaMapMarkerAlt /> India</span>
              </div>
            </div>
          </div>

          <div className="bg-white text-black rounded-2xl overflow-hidden shadow-md hover:scale-105 transition duration-300">
            <img src="/images/destination2.png" alt="Manali" className="w-full h-60 object-cover" />
            <div className="p-5 space-y-2">
              <div className="flex items-center gap-2 text-yellow-500 text-sm font-medium">
                <FaStar /> 4.2 (32) <span className="text-pink-500">😍</span>
              </div>
              <h3 className="text-lg font-semibold">Manali</h3>
              <p>
                <span className="text-red-600 font-bold">Rs. 10,000</span>{' '}
                <span className="text-gray-600">- Per person</span>
              </p>
              <div className="flex items-center text-sm text-gray-700 gap-4 mt-2">
                <span className="flex items-center gap-1"><FaClock /> 4 Day’s</span>
                <span className="flex items-center gap-1"><FaUsers /> 10+</span>
                <span className="flex items-center gap-1"><FaMapMarkerAlt /> India</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-10 text-center">
          <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
            Explore all →
          </button>
        </div>
      </div>
    </section>
  );
}
