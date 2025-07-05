'use client';

import {
  FaMoneyBillWave,
  FaSuitcaseRolling,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import Image from 'next/image';
import React from 'react';

export default function ServicesSection() {
  return (
    <div
      id="services"
      className="bg-black text-white py-5 px-6 md:px-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">

        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="absolute top-4 left-4 w-full h-full bg-gray-300 rounded-3xl z-0"></div>
          <div className="relative z-10 rounded-3xl overflow-hidden max-h-[420px] w-full">
            <Image
              src="/images/image03.png"
              alt="Tour"
              width={500}
              height={500}
              className="rounded-3xl object-cover w-full h-full"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md z-20">
            <div className="bg-black text-white p-2 rounded-full text-sm">
              <FaSuitcaseRolling />
            </div>
            <span className="text-black font-medium text-sm">
              Professional Tour Guide
            </span>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:ml-30 text-center md:text-left md:mt-20">
          <div className="mb-10">
            <div className="w-fit mx-auto md:mx-0">
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
                Why Choose Us ?
              </h2>
              <div className="h-[2px] bg-gray-500 mt-2 w-[290px]"></div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4 justify-center md:justify-start text-center md:text-left">
              <div className="bg-white text-black p-3 rounded-xl text-xl shadow-sm">
                <FaMoneyBillWave />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Best Price Guarantee</h4>
                <p className="text-sm text-gray-300">Get the best prices.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 justify-center md:justify-start text-center md:text-left">
              <div className="bg-white text-black p-3 rounded-xl text-xl shadow-sm">
                <FaSuitcaseRolling />
              </div>
              <div>
                <h4 className="text-lg font-semibold">All Inclusive Packages</h4>
                <p className="text-sm text-gray-300">Zero worries.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 justify-center md:justify-start text-center md:text-left">
              <div className="bg-white text-black p-3 rounded-xl text-xl shadow-sm">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Custom Destinations</h4>
                <p className="text-sm text-gray-300">Tailored trips just for you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="absolute right-0 top-1/3 transform -rotate-90 hidden md:block z-0">
        <Image
          src="/images/Group 112.png"
          alt="plane trail"
          width={320}
          height={320}
          className="object-contain opacity-100 brightness-100"
        />
      </div>
    </div>
  );
}