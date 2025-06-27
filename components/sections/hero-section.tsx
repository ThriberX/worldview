'use client';

import React from 'react';
import { FaLandmark, FaHiking, FaPrayingHands } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center bg-no-repeat relative flex items-start"
        style={{
          backgroundImage: "url('/images/home.png')",
        }}
      >
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-gradient-to-b from-black/10 via-transparent to-black/70"></div>
        </div>

        {/* Heading */}
        <div className="relative z-10 px-6 md:px-16 pt-32 text-left">
          <h1 className="text-black text-2xl md:text-5xl font-medium leading-tight mb-6 drop-shadow">
            Be prepared for the Travel <br />
            <span className="block">and beyond!</span>
          </h1>
          <button className="mt-1 px-6 py-3 bg-black text-white rounded-full hover:bg-white hover:text-black transition">
            Explore Destinations →
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative z-20 -mt-32 px-6 md:px-16 pb-16 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#f3e7d1] rounded-2xl p-6 shadow-md">
            <FaLandmark className="text-3xl text-[#dfb670] mb-4" />
            <div className="mb-4 text-xl font-semibold text-black">Cultural Immersion</div>
            <p className="text-gray-700 mb-6">
              Explore rich traditions and heritage across regions.
            </p>
            <button className="bg-[#dfb670] text-black font-medium px-4 py-2 rounded-full">
              View Category
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#e78264] rounded-2xl p-6 shadow-md text-black">
            <FaHiking className="text-3xl text-black mb-4" />
            <div className="mb-4 text-xl font-semibold">Adventure Trails</div>
            <p className="text-black/90 mb-6">
              Unleash thrill with handpicked outdoor experiences.
            </p>
            <button className="bg-[#a23d29] text-black font-medium px-4 py-2 rounded-full">
              Start Exploring
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-[#d8e5f6] rounded-2xl p-6 shadow-md">
            <FaPrayingHands className="text-3xl text-[#5c85b1] mb-4" />
            <div className="mb-4 text-xl font-semibold text-black">Spiritual Retreats</div>
            <p className="text-gray-700 mb-6">
              Discover peace through curated sacred escapes.
            </p>
            <button className="bg-[#b6ceeb] text-black font-medium px-4 py-2 rounded-full">
              Plan Tranquility
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
