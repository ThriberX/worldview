'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const vehicles = [
  {
    title: "Urbania 14/17 seater",
    rating: 4.8,
    passengers: 20,
    ac: true,
    image: "https://feture-seo.d2lmonhhyl427m.amplifyapp.com/images/hero-van-removebg-preview.png",
    alt:"Spacious interior of tempo traveler with comfortable seating"
  },
  {
    title: "Tempo Traveller 12/17 Seater",
    rating: 4.8,
    passengers: 17,
    ac: true,
    image: "https://feture-seo.d2lmonhhyl427m.amplifyapp.com/images/traveller3050wb.png",
    alt:"Happy group traveling in a tempo traveler through Varansi streets"
  },
  {
    title: "ERTIGA",
    rating: 4.9,
    passengers: 6,
    ac: true,
    image: "https://feture-seo.d2lmonhhyl427m.amplifyapp.com/images/ertiga-red.png",
    alt:"White tempo traveler parked in Varanasi city center"
  },
];

export default function CarRentalShowcase() {
  const router = useRouter(); 

  return (
    <section className="bg-black text-white">

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-20 pt-10 pb-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Enjoy your ride with <br /> our comfortable <br /> <span className="text-white">cars.</span>
          </h1>
          <p className="text-gray-300 mb-6">
            We are ready to serve the best <br /> experience in car rental.
          </p>
          <button 
            onClick={() => router.push('/cabs')}
            className="bg-yellow-400 hover:bg-yellow-300 transition px-6 py-3 rounded-md text-black font-semibold"
          >
            Explore Now
          </button>
        </div>

        <div className="flex-1">
          <Image
            src="/images/Urbania.png"
            alt="Hero Car"
            width={600}
            height={400}
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>

      <h2 style={{
        textAlign: 'center',
        padding: '10px 20px',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        borderRadius: '12px',
        marginBottom: '40px',
      }}>
        Most popular taxi Rental <span style={{color: '#FBBF24', fontWeight: 'bolder', fontSize:'40px'}}>Deals</span>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '32px',
        padding: '0 24px'
      }}>
        {vehicles.map((car, index) => (
          <div key={index} style={{
            backgroundColor: '#2E709E',
            borderRadius: '16px',
            padding: '20px',
            textAlign: 'center',
           boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            color: 'white',
          }}>
            <div style={{ width: '100%', height: '180px', marginBottom: '16px', overflow: 'hidden' }}>
              <img
                src={car.image}
                alt={car.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '8px' }}>{car.title}</h3>
            <p style={{ color: '#FBBF29', marginBottom: '8px' }}>⭐ {car.rating}</p>
            <p style={{ fontSize: '0.9rem', marginBottom: '4px' }}>👤 {car.passengers} Passengers</p>
            <p style={{ fontSize: '0.9rem', marginBottom: '4px' }}>❄ Air Conditioning</p>
            <a href="tel:7800664900">
              <button style={{
                backgroundColor: '#FBBF24',
                color: '#000',
                padding: '10px 16px',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '8px',
                transition: 'transform 0.1s ease-in-out'
              }}>
                Call now ➜
              </button>
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 mb-16 flex justify-center">
        <button
          onClick={() => router.push('/cabs')}
          className="border border-white text-white hover:bg-white hover:text-black transition px-6 py-2 rounded-full text-sm font-medium"
        >
          Show all vehicles →
        </button>
      </div>
    </section>
  );
}
