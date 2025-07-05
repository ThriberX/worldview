'use client';

import React from 'react';
import { FaLandmark, FaHiking, FaPrayingHands } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
    const router = useRouter(); 

  return (
    <div className="w-full md:w-[100%] mx-auto bg-no-repeat bg-center bg-cover pt-16 
    bg-[url('/images/home.png')] 
    md:bg-[url('/images/home-upscaled.png')]"
    >
      {/* Hero + Cards Container */}
      <div className="min-h-screen flex flex-col justify-start px-3 md:px-10 relative z-10">
        {/* Hero Text */}
        <div className="pt-24 md:pt-32 text-left">
          <h1 className="text-black text-2xl md:text-5xl font-medium leading-tight mb-6 drop-shadow">
            Be prepared for the Travel <br />
            <span className="block">and beyond!</span>
          </h1>
          <button    onClick={() => router.push('/cabs') }  className=" z-100 mt-1 px-6 py-3 bg-black text-white rounded-full common-btn-effects hover:bg-white hover:text-black transition">
            Explore Destinations →
          </button>
        </div>

        {/* Cards Section */}
        <div className="mt-20 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#f3e7d1] rounded-2xl p-6 shadow-md force-card-width">
              <FaLandmark className="text-3xl  text-[#dfb670] mb-4" />
              <div className="mb-4 md:text-xs lg:text-2xl font-semibold text-black">Cultural Immersion</div>
              <p className="text-gray-700 md:text-xs lg:text-xl hide-below-700 mb-3">
                Explore rich traditions and heritage across regions.
              </p>
              <button 
             onClick={() => router.push('/cabs') }
              className="bg-[#dfb670] text-black font-medium px-4 py-2 rounded-full">
            
                View Category
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#e78264] rounded-2xl p-6 shadow-md text-black force-card-width">
              <FaHiking className="text-3xl text-black mb-4" />
              <div className="mb-4 md:text-xs lg:text-2xl font-semibold">Adventure Trails</div>
              <p className="text-black/90 md:text-xs lg:text-xl hide-below-700 mb-6">
                Unleash thrill with handpicked outdoor experiences.
              </p>
              <button  onClick={() => router.push('/cabs') } className="bg-[#a23d29] text-black font-medium px-4 py-2 rounded-full">
                Start Exploring
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#d8e5f6] rounded-2xl p-6 shadow-md force-card-width">
              <FaPrayingHands className="text-3xl text-[#5c85b1] mb-4" />
              <div className="mb-4 md:text-xs lg:text-2xl font-semibold text-black">Spiritual Retreats</div>
              <p className="text-gray-700  md:text-xs lg:text-xl hide-below-700 mb-6">
                Discover peace through curated sacred escapes.
              </p>
              <button  onClick={() => router.push('/cabs') } className="bg-[#b6ceeb] text-black font-medium px-4 py-2 rounded-full">
                Plan Tranquility
              </button>
            </div>
          </div>
        </div>
        
        
      </div>
      
    </div>
    
  );
}
