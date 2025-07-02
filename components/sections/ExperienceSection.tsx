'use client';

import React from 'react';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

export default function ExperienceSection() {
  return (
    <section className="bg-black text-white py-5 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-10">

        <div className="w-full md:w-1/2 text-center md:text-left md:mt-20">
          <div className="mb-10">
            <div className="w-fit mx-auto md:mx-0">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Share Your Experience <br /> With Us
              </h2>
            </div>
          </div>
          
          <a href="https://www.instagram.com/worldvt.vns/">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-md font-medium mt-2 mb-8 flex items-center gap-2 mx-auto md:mx-0 common-btn-effects">
            <FaInstagram className="text-lg" />
            @worldview
          </button>
          </a>
          
          <div className="flex gap-8 justify-center md:justify-start text-left">
            <div>
              <p className="text-2xl font-bold">10</p>
              <p className="text-sm text-gray-300">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold">120+</p>
              <p className="text-sm text-gray-300">Destination Collaboration</p>
            </div>
            <div>
              <p className="text-2xl font-bold">67+</p>
              <p className="text-sm text-gray-300">Satisfied Customer</p>
            </div>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="absolute top-7 right-3 md:top-12 md:left-20 md:right-auto w-[85%] h-[430px] bg-gray-300 rounded-3xl z-0 shadow-md"></div>

          <div className="relative z-10 w-[85%] h-[430px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/experience.png"
              alt="Experience"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-xl shadow-md z-20 text-sm text-center">
            <p className="mb-1">How’s Your Experience?</p>
            <div className="flex gap-2 justify-center text-lg">
              <span>😡</span>
              <span>😳</span>
              <span>😐</span>
              <span>😘</span>
              <span>😍</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
