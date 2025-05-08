'use client';
import Head from 'next/head';

export default function HomePage() {
  const cars = [
    {
      title: "URBANIA(17-seats)",
      rating: 4.8,
      passengers: 17,
      type: "petrol",
      ac: true,
      doors: 2,
      image: "/images/urbania-bbc.png",
      alt:"Happy group traveling in a tempo traveler through Varansi streets"
    },
    {
      title: "URBANIA(20-seats)",
      rating: 4.8,
      passengers: 20,
      type: "desial",
      ac: true,
      doors: 2,
      image: "/images/urbania.png",
       alt:"White tempo traveler parked in Varanasi city center"

    },
    {
      title: "URBANIA(26-seats)",
      rating: 4.8,
      passengers: 26,
      type: "desial",
      ac: true,
      doors: 2,
      image: "/images/urbania.png"
    },
    {
      title: "SWIFT DEZIRE",
      rating: 4.8,
      passengers: 4,
      type: "desial",
      ac: true,
      doors: 4,
      image: "/images/swift-dezire.png",
      alt:"Happy group traveling in a car through Varanasi streets"
    },
    {
      title: "ERTIGA",
      rating: 4.8,
      passengers: 6,
      type: "desial",
      ac: true,
      doors: 4,
      image: "/images/ertiga.png",
      alt:"White tempo traveler parked in Varanasi city center"
    },
    {
      title: "INNOVA CRYSTA",
      rating: 4.8,
      passengers: 7,
      type: "desial",
      ac: true,
      doors: 4,
      image: "/images/innova-crysta.png",
      alt:"Spacious interior of tempo traveler with comfortable seating"
    },
  ];

  return (
    <>
      <Head>
        <title>Tempo Traveler Rentals in Varanasi | Comfortable & Affordable Travel</title>
      </Head>
      <meta name="description" content="Book reliable tempo traveler rentals in Varanasi for group travel. Enjoy comfort, affordability, and timely service. Reserve your ride today!"></meta>

      <main style={{ backgroundColor: '#0F172A', color: 'white', padding: '40px 24px', fontFamily: 'sans-serif' }}>
        {/* Hero Section */}
        <section style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '60px',
        }}>
          <div style={{ flex: '1 1 400px', paddingRight: '20px' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px' }}>
              Reliable Tempo Traveller Rentals in Varanasi
            </h1>
            <p style={{ fontSize: '1rem', marginBottom: '24px' }}>
              We are ready to serve the best experience in car rental.
            </p>
            <button style={{
              backgroundColor: '#FBBF24',
              color: '#000',
              padding: '12px 20px',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Explore Now
            </button>
            <h2 style={{color:'#0F172A' ,fontSize:'0px'}}>Why Choose Our Services ?</h2>
<h3 style={{color:'#0F172A', fontSize:'0px'}}>Comfortable Seating for All Group Sizes</h3>
<h3 style={{color:'#0F172A',fontSize:'0px'}}>Experienced Drivers Ensuring Safe Journeys</h3>
<h3 style={{color:'#0F172A',fontSize:'0px'}}>Affordable Rates with No Hidden Charges</h3>
          </div>
          <img
            src="/images/hero-van.png"
            alt="Spacious tempo traveller parked in Varanasi ready for group travel"
            style={{ flex: '1 1 400px', maxWidth: '600px', width: '100%', borderRadius: '12px', marginTop: '20px' }}
          />
        </section>

        {/* Section Title */}
        <h2 style={{
          backgroundColor: '#1E293B',
          textAlign: 'center',
          padding: '10px 20px',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          borderRadius: '12px',
          marginBottom: '40px',
        }}>
          Most popular cars rental deals
        </h2>

        {/* Car Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px'
        }}>
          {cars.map((car, index) => (
            <div key={index} style={{
              backgroundColor: '#2E709E',
              borderRadius: '16px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              color: 'white',
            }}>
              <img
                src={car.image}
                alt={car.alt}
                style={{ width: '100%', height: '180px', objectFit: 'contain', marginBottom: '16px' }}
              />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '8px' }}>{car.title}</h3>
              <p style={{ color: '#FBBF24', marginBottom: '8px' }}>⭐ {car.rating}</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '4px' }}>👤 {car.passengers} Passengers</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '4px' }}>⚙ {car.type}</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '4px' }}>❄ Air Conditioning</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '12px' }}>🚪 {car.doors} Doors</p>
            <a href="tel:7800664900"> <button style={{
                backgroundColor: '#FBBF24',
                color: '#000',
                padding: '10px 16px',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '8px'
              }}>
                Call now ➜
              </button>
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
