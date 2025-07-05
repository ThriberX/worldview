'use client';

import React from 'react';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

export default function ExperienceSection() {
  return (
    <section className="bg-black text-white relative py-12 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-10">

        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="mb-10">
            <div className="w-fit mx-auto md:mx-0">
              <h2 className="text-5xl md:text-5xl font-bold leading-tight">
                Share Your Experience <br /> With Us
              </h2>
            </div>
          </div>

          <a href="https://www.instagram.com/worldvt.vns/">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-10 py-6 rounded-md font-medium mt-2 mb-8 flex items-center gap-2 mx-auto md:mx-0 common-btn-effects">
              <FaInstagram className="text-lg" />
              @worldview
            </button>
          </a>

          <div className="flex gap-3 justify-center md:justify-start divide-x divide-gray-500 text-left relative">
            <div className="px-3">
              <p className="text-base md:text-xl lg:text-3xl font-bold">10</p>
              <p className="text-base md:text-xl lg:text-3lg text-gray-300">Years <br />Experience</p>
            </div>
            <div className="px-3">
              <p className="text-base lg:text-3xl md:text-xl font-bold">120+</p>
              <p className="text-base lg:text-xl md:text-xl text-gray-300">Destination<br />Collaboration</p>
            </div>
            <div className="px-3">
              <p className="text-base lg:text-3xl md:text-xl font-bold">67+</p>
              <p className="text-base lg:text-xl md:text-xl text-gray-300">Satisfied <br />Customer</p>
            </div>

            <div className="absolute -left-40 top-[220px] transform -translate-y-1/2 scale-x-[-1] rotate-45 hidden md:block z-0"> {/* Adjusted top and rotate */}
              <Image
                src="/images/Group 112.png"
                alt="plane trail"
                width={320} 
                height={320} 
                className="object-contain opacity-100 brightness-100"
              />
            </div>

          </div> 
        </div> 

        <div className="relative w-full md:w-1/2 flex justify-center">
    
          <div className="absolute right-20 -top-10 md:-top-10 md:right-20 md:w-[85%] h-[80%] bg-gray-300 rounded-3xl shadow-md"></div>

          <div className="z-10 md:w-[85%] md:h-[80%] rounded-3xl overflow-hidden shadow-lg flex flex-col items-centercenter">
            <Image
              src="/images/experience.png"
              alt="Experience"
              width={500}
              height={500}
              style={{
                width: '100%',
                height: 'auto'
              }}
              className="w-full h-full w-70% h-70% mb-[2rem] object-cover"
            />
          </div>

          <div className="absolute bottom-20 md:bottom-20 md:left-10 -translate-x-1/2 bg-white/60 border-b border-white/60 text-black px-4 py-2 rounded-xl shadow-md z-20 text-center">
            <p className="mb-1 text-sm sm:text-base">How’s Your Experience?</p>
            <div className="flex lg:gap-2 md:gap-1 justify-center sm:text-sm text-base lg:text-lg">
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